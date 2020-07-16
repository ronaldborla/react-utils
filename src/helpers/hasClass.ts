/**
 * @packageDocumentation
 * @module helpers
 */

import getClassList from './getClassList';

/**
 * Has class
 */
export default function hasClass(
  element: HTMLElement,
  className: string,
): boolean {
  return getClassList(element).includes(className);
}
