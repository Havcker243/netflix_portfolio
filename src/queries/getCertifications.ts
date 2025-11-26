import { fetchSupabaseTable } from './datoCMSClient';
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  return fetchSupabaseTable<Certification>('certifications', {
    orderBy: { column: 'issuedDate', ascending: false },
  });
}
