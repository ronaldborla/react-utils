/**
 * Get scroll value
 */
export default function getScrollValue(): number {
  return Math.max(window.scrollY, document.body.scrollTop);
}
