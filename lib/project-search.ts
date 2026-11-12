export function normalizeProjectQuery(query: string): string {
  return query.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 100);
}
