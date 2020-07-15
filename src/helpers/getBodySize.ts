import { getElementHeight, getElementWidth } from './getElementSize'
import Size from '../types/Size'

/**
 * Body height
 */
export function getBodyHeight(): number {
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    getElementHeight(document.documentElement)
  )
}

/**
 * Body width
 */
export function getBodyWidth(): number {
  return Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    getElementWidth(document.documentElement)
  )
}

/**
 * Body size
 */
export default function getBodySize(): Size {
  return {
    height: getBodyHeight(),
    width: getBodyWidth(),
  }
}
