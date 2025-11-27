import { fetchSupabaseTable } from "../lib/supabaseClient";
import { TimelineItem } from "../types";

type TimelineRow = Omit<TimelineItem, "summaryPoints"> & {
  summaryPoints: string[] | string | null;
};

export async function getTimeline(): Promise<TimelineItem[]> {
  console.log('getTimeline invoked');
  console.log("getTimeline() called");

  const selectString =
    "id, timeline_type as timelineType, name, title, tech_stack as techStack, summary_points as summaryPoints, date_range as dateRange, sort_order as sortOrder";

  console.log("SELECT STRING BEING SENT TO SUPABASE:", selectString);

  const rows = await fetchSupabaseTable<TimelineRow>("timeline_items", {
    select: selectString,
    orderBy: { column: "sort_order", ascending: true },
  });

  console.log("RAW ROWS FROM SUPABASE:", rows);

  return rows.map((item): TimelineItem => {
    let normalized: string[] = [];

    if (Array.isArray(item.summaryPoints)) {
      normalized = item.summaryPoints;
    } else if (typeof item.summaryPoints === "string") {
      const trimmed = item.summaryPoints.trim();

      normalized = trimmed.startsWith("[")
        ? (JSON.parse(trimmed) as string[])
        : trimmed
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean);
    }

    return { ...item, summaryPoints: normalized };
  });
}
