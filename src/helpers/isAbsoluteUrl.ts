/**
 * Check if url is absolute
 */
export default function isAbsoluteUrl(url: string) {
  return /^https?:\/\//i.test(url)
}
