import { fetchSupabaseTable } from './datoCMSClient';
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return fetchSupabaseTable<Skill>('skills', { orderBy: { column: 'category' } });
}
