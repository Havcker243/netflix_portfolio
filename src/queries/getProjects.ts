import { fetchSupabaseTable } from './datoCMSClient';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return fetchSupabaseTable<Project>('projects', {
    orderBy: { column: 'title' },
  });
}
