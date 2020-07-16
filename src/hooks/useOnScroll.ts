/**
 * @packageDocumentation
 * @module hooks
 */

import { useEffect } from 'react';
import getScrollValue from '../helpers/getScrollValue';

/**
 * Scroll listener
 */
export default function useOnScroll(
  callback: (value: number, event: Event | null) => void,
): void {
  useEffect(() => {
    let raf: number | null = null;
    const onScrollOrTouchMove = (event: Event | null) => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      raf = window.requestAnimationFrame(() => {
        callback(getScrollValue(), event);
        raf = null;
      });
    };
    const onScroll = (event: Event) => {
      onScrollOrTouchMove(event);
    };
    const onTouchMove = (event: Event) => {
      onScrollOrTouchMove(event);
    };
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('touchmove', onTouchMove, true);
    onScrollOrTouchMove(null);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('touchmove', onTouchMove, true);
    };
  }, [callback]);
}
