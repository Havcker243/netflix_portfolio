import { fetchSupabaseTable } from './datoCMSClient';
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  return fetchSupabaseTable<TimelineItem>('timeline_items', {
    orderBy: { column: 'sort_order' },
  });
}
