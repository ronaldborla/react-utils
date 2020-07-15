/**
 * Check if url is absolute
 */
export default function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
