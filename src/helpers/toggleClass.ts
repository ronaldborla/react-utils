/**
 * @packageDocumentation
 * @module helpers
 */

import isUndefined from 'lodash/isUndefined';
import getClassList from './getClassList';

/**
 * Toggle element class
 */
export default function toggleClass(
  element: HTMLElement,
  className: string,
  add?: boolean,
): void {
  const list = getClassList(element);
  const index = list.indexOf(className);
  if (isUndefined(add)) {
    add = index < 0;
  }
  if (add && index < 0) {
    element.className = [...list, className].join(' ');
  } else if (!add && index >= 0) {
    element.className = [
      ...list.slice(0, index),
      ...list.slice(index + 1),
    ].join(' ');
  }
}
