/**
 * @packageDocumentation
 * @module helpers
 */

import trim from 'lodash/trim';

/**
 * Get class list
 */
export default function getClassList(element: HTMLElement): string[] {
  return element.className
    .split(' ')
    .filter((className: string) => !!trim(className));
}
