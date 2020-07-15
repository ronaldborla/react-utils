import Size from '../types/Size';

/**
 * Element height
 */
export function getElementHeight(element: HTMLElement): number {
  return Math.max(
    element.clientHeight,
    element.scrollHeight,
    element.offsetHeight,
  );
}

/**
 * Element width
 */
export function getElementWidth(element: HTMLElement): number {
  return Math.max(
    element.clientHeight,
    element.scrollHeight,
    element.offsetHeight,
  );
}

/**
 * Element size
 */
export default function getElementSize(element: HTMLElement): Size {
  return {
    height: getElementWidth(element),
    width: getElementHeight(element),
  };
}
