import { fetchSupabaseSingle } from './datoCMSClient';
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit | null> {
  return fetchSupabaseSingle<WorkPermit>('work_permit');
}
