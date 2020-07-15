import Size from '../types/Size';

/**
 * Get viewport height
 */
export function getViewportHeight(): number {
  return Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );
}

/**
 * Get viewport width
 */
export function getViewportWidth(): number {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );
}

/**
 * Get viewport size
 */
export default function getViewportSize(): Size {
  return {
    height: getViewportHeight(),
    width: getViewportWidth(),
  };
}
