import { createClient, SupabaseClient } from '@supabase/supabase-js';

type Filter = Record<string, string | number | boolean>;

interface SupabaseFetchOptions {
  select?: string;
  orderBy?: { column: string; ascending?: boolean };
  filters?: Filter;
  limit?: number;
}

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const hasSupabaseConfig = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase: SupabaseClient | null = hasSupabaseConfig
  ? createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string)
  : null;

function applyFilters<T>(query: ReturnType<NonNullable<typeof supabase>['from']>, filters?: Filter) {
  if (!filters) return query;
  return Object.entries(filters).reduce((acc, [column, value]) => acc.eq(column, value), query);
}

export async function fetchSupabaseTable<T>(table: string, options: SupabaseFetchOptions = {}): Promise<T[]> {
  if (!supabase) {
    return [];
  }

  let query = supabase.from(table).select(options.select ?? '*');

  if (options.orderBy) {
    query = query.order(options.orderBy.column, { ascending: options.orderBy.ascending !== false });
  }

  query = applyFilters(query, options.filters) as typeof query;

  if (options.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  if (error) {
    throw error;
  }

  return (data as T[]) ?? [];
}

export async function fetchSupabaseSingle<T>(table: string, options?: SupabaseFetchOptions): Promise<T | null> {
  const rows = await fetchSupabaseTable<T>(table, { ...(options ?? {}), limit: 1 });
  return rows.length ? rows[0] : null;
}
