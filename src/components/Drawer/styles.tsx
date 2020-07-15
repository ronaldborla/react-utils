import styled from '@emotion/styled'
import { SCROLL_SUSPENDED_CLASS } from '../../constants'

export const drawerHtmlCss = `
  html {
    &.${SCROLL_SUSPENDED_CLASS} {
      display: flex;
      flex-direction: column;
      max-height: 100%;
      overflow-y: scroll;

      body {
        overflow-y: hidden;
      }
    }
  }
`

export const Wrapper = styled.div`
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
  display: flex;
  flex-direction: column;
  position: fixed;
  opacity: 0;

  &.drawer-is-open {
    opacity: 1;
  }

  &.drawer-position-top {
    left: 0;
    right: 0;
    top: 0;
    transform: translateY(-100%);

    &.drawer-is-cover {
      bottom: 0;
    }

    &.drawer-is-open {
      transform: translateY(0%);
    }
  }

  &.drawer-position-right {
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateX(100%);

    &.drawer-is-cover {
      left: 0;
    }

    &.drawer-is-open {
      transform: translateX(0%);
    }
  }

  &.drawer-position-bottom {
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(100%);

    &.drawer-is-cover {
      top: 0;
    }

    &.drawer-is-open {
      transform: translateY(0%);
    }
  }

  &.drawer-position-left {
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);

    &.drawer-is-cover {
      right: 0;
    }

    &.drawer-is-open {
      transform: translateX(0%);
    }
  }
`

export const Backdrop = styled.div`
  transition: 0.3s opacity ease;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;

  &.drawer-is-open {
    opacity: 0.6;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  box-sizing: border-box;
`
