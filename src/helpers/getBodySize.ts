/**
 * @packageDocumentation
 * @module helpers
 */

import { getElementHeight, getElementWidth } from './getElementSize';
import Size from '../types/Size';

/**
 * Get the height of the HTML <body> element
 * This is used to calculate the total vertical size of the body
 * @returns {number} Height of body in integer
 */
export function getBodyHeight(): number {
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    getElementHeight(document.documentElement),
  );
}

/**
 * Get the width of the HTML <body> element
 * This is used to calculate the total horizontal size of the body
 * @returns {number} Width of body in integer
 */
export function getBodyWidth(): number {
  return Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    getElementWidth(document.documentElement),
  );
}

/**
 * Body size
 */
export default function getBodySize(): Size {
  return {
    height: getBodyHeight(),
    width: getBodyWidth(),
  };
}
