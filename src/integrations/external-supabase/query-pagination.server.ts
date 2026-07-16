type QueryError = { message: string };

type QueryPage<T> = {
  data: T[] | null;
  error: QueryError | null;
};

export async function fetchAllPages<T>(
  fetchPage: (from: number, to: number) => PromiseLike<QueryPage<T>>,
  pageSize = 500,
): Promise<{ data: T[]; error: QueryError | null }> {
  const rows: T[] = [];

  for (let from = 0; ; from += pageSize) {
    const { data, error } = await fetchPage(from, from + pageSize - 1);
    if (error) return { data: [], error };

    const page = data ?? [];
    rows.push(...page);
    if (page.length < pageSize) return { data: rows, error: null };
  }
}

export function chunkValues<T>(values: T[], chunkSize = 200): T[][] {
  const chunks: T[][] = [];
  for (let start = 0; start < values.length; start += chunkSize) {
    chunks.push(values.slice(start, start + chunkSize));
  }
  return chunks;
}
