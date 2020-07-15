import useEventListener from './useEventListener'
import { useCallback } from 'react'
import getViewportSize from '../helpers/getViewportSize'
import Size from '../types/Size'

/**
 * On resize hook
 */
export default function useOnResize(callback: (size: Size, event: Event) => void): void {
  useEventListener(window, ['resize'], useCallback((event: Event) => {
    callback(getViewportSize(), event)
  }, [callback]))
}
