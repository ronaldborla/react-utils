import { useEffect } from 'react';

/**
 * Listen for an HTML event
 */
export default function useEventListener(
  element: HTMLElement | Window | null,
  events: string[],
  callback: (event: Event) => void,
  options?: boolean | AddEventListenerOptions,
): void {
  useEffect(() => {
    if (element) {
      const listeners = events.map((name: string) => {
        const listener = (event: Event) => callback(event);
        element.addEventListener(name, listener, options);
        return listener;
      });
      return () => {
        events.forEach((name: string, index: number) => {
          element.removeEventListener(name, listeners[index], options);
        });
      };
    }
  }, [callback, element, events, options]);
}
