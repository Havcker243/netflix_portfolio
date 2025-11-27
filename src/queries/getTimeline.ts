import { fetchSupabaseTable } from './datoCMSClient';
import { TimelineItem } from '../types';

export type TimelineRow = Omit<TimelineItem, 'summaryPoints'> & {
  summaryPoints: TimelineItem['summaryPoints'] | string | null;
};

export async function getTimeline(): Promise<TimelineRow[]> {
  return fetchSupabaseTable<TimelineRow>('timeline_items', {
    orderBy: { column: 'sort_order' },
  });
}
