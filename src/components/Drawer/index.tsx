/**
 * @packageDocumentation
 * @module Drawer
 */

import React, {
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { getBodyHeight } from '../../helpers/getBodySize';
import hasClass from '../../helpers/hasClass';
import toggleClass from '../../helpers/toggleClass';
import useEventListener from '../../hooks/useEventListener';
import { SCROLL_SUSPENDED_CLASS } from '../../constants';
import { Backdrop, Container, Wrapper, drawerHtmlCss } from './styles';

export { drawerHtmlCss };

interface DrawerProps {
  /**
   * Sets the className of the backdrop
   */
  backdropClassName?: string;
  /**
   * Sets whether to close the Drawer if user clicks on the backdrop<br />
   * Set to `false` to disable closing when backdrop is clicked
   * @default `true`
   */
  closeOnBackdropClick?: boolean;
  /**
   * Callback to trigger when closing of the drawer has been requested
   * @event
   */
  onClose?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * Callback to trigger when drawer has closed completely
   * @event
   */
  onCloseComplete?: () => void;
  /**
   * Callback to trigger when drawer is opening
   * @event
   */
  onOpen?: () => void;
  /**
   * Callback to trigger when drawer has opened completely
   * @event
   */
  onOpenComplete?: () => void;
  /**
   * Sets the open state of the drawer
   *
   * - `true` - Opens the drawer
   * - `false` - Closes the drawer
   * @default `false`
   */
  open?: boolean;
  /**
   * Specify the position of the drawer
   *
   * - `top` - Ease drawer content from the top
   * - `right` - Ease drawer content from the right
   * - `bottom` - Ease drawer content from the bottom
   * - `left` - Ease drawer content from the left
   * @default `right`
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Specify the size of the drawer
   *
   * - `auto` - Uses the size of the passed content children
   * - `cover` - Covers the whole screen
   * @default `auto`
   */
  size?: 'auto' | 'cover';
}

Drawer.propTypes = {
  backdropClassName: PropTypes.string,
  children: PropTypes.node,
  closeOnBackdropClick: PropTypes.bool,
  onClose: PropTypes.func,
  onCloseComplete: PropTypes.func,
  onOpen: PropTypes.func,
  onOpenComplete: PropTypes.func,
  open: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  size: PropTypes.oneOf(['auto', 'cover']),
};

Drawer.defaultProps = {
  closeOnBackdropClick: true,
  open: false,
  options: {},
  position: 'right',
  size: 'auto',
};

/**
 * ## Drawer component
 *
 * ### Usage
 *
 * Encloses any UI, component, or HTML block in a Drawer UI<br />
 * <br />
 * This component is normally paired with the `useState` React hook<br />
 * Define a boolean state that will identify the `open` status of the Drawer
 *
 * ```
 * const [open, setOpen] = useState(false);
 * ```
 *
 * On render, pass the `open` value to the `open` prop, and an `onClose` callback
 * that will revert the value of the `open` state to `false`<br />
 * <br />
 * Pass the content of the drawer as `children`. Take note that you may also need to
 * pass a button inside the content that should revert the Drawer back to its closed state
 *
 * ```
 * <Drawer
 *   onClose={() => {
 *     setOpen(false);
 *   }}
 *   open={open}
 * >
 *   <div className="wrapper">
 *     Content is passed as children<br />
 *     This may also contain a custom UI component or an
 *     <strong>HTML element</strong>
 *     <button
 *       onClick={() => {
 *         setOpen(false);
 *       }}
 *     >
 *       Close drawer
 *     </button>
 *   </div>
 * </Drawer>
 * ```
 *
 * Finally, add a mechanism to change the value of `open` state to `true`
 * to trigger the Drawer to open
 *
 * ```
 * <button
 *   onClick={() => {
 *     setOpen(true);
 *   }}
 * >
 *   Open drawer
 * </button>
 * ```
 *
 * Clicking on the button labeled `Open drawer` will open the drawer
 *
 * ### Overriding CSS/styles
 *
 * It's possible to override the styling of the drawer and backdrop.
 * Simply wrap the Drawer component inside a container<br />
 * <br />
 * Using sass/scss:
 *
 * ```
 * Component:
 *
 * <div className="drawer-container">
 *   <Drawer {...props}>
 *     {children}
 *   </Drawer>
 * </div>
 *
 * Style:
 *
 * .drawer-parent {
 *   .drawer-wrapper {
 *     ...Your wrapper CSS
 *   }
 *
 *   .drawer-backdrop {
 *     ...Your backdrop CSS
 *   }
 *
 *   .drawer-container {
 *     ...Your drawer container CSS
 *   }
 * }
 * ```
 *
 * You may alternatively pass a custom className for the backdrop and wrapper:
 *
 * ```
 * <Drawer
 *   backdropClassName="custom-backdrop-class"
 *   className="custom-drawer-class"
 *   {...props}
 * >
 *   {children}
 * </Drawer>
 * ```
 *
 * Since you now have a custom class name, you may freely add custom styling:
 *
 * ```
 * .custom-drawer-class {
 *   ...Your backdrop CSS
 *
 *   .drawer-container {
 *     ...Your drawer container CSS
 *   }
 * }
 *
 * .custom-backdrop-class {
 *   ...Your backdrop CSS
 * }
 * ```
 *
 * It's also possible to override styling using styled-components or emotion.
 * You only need to wrap the Drawer inside a styled component with nested CSS
 * definitions as demonstrated above
 *
 * ### Setting the backdrop color/opacity, transition duration, etc.
 *
 * Since the backdrop color, transition settings, z-index, and other properties
 * are only defined in CSS, you may easily override these by overriding the styles.
 * Follow the instructions above under **Overriding CSS/styles**<br />
 * <br />
 * To change backdrop color:
 *
 * ```
 * .drawer-backdrop {
 *   background-color: red;
 * }
 * ```
 *
 * To change backdrop opacity (when open):
 *
 * ```
 * .drawer-backdrop {
 *   &.drawer-is-open {
 *     opacity: 0.4;
 *   }
 * }
 * ```
 *
 * To change transition duration (animation speed):
 *
 * ```
 * .drawer-backdrop,
 * .drawer-wrapper {
 *   transition-duration: 0.8s;
 * }
 * ```
 *
 * Note that when changing transition duration, both backdrop and wrapper must
 * have the same value. Otherwise, it may cause unexpected behaviors
 */
export default function Drawer(
  props: DrawerProps & HTMLAttributes<HTMLElement>,
): ReactElement {
  const {
    backdropClassName,
    children,
    className,
    closeOnBackdropClick,
    onClose,
    onCloseComplete,
    onOpen,
    onOpenComplete,
    open,
    position,
    size,
    ...rest
  } = props;
  const [backdropActive, setBackdropActive] = useState<boolean>(false);
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false);
  const backdropRef = useRef(null);
  const backdropElement: HTMLElement | null = backdropRef?.current;
  useEffect(() => {
    if (open) {
      setBackdropActive(true);
      if (isFunction(onOpen)) {
        onOpen();
      }
    } else {
      setBackdropOpen(false);
    }
  }, [onOpen, open]);
  useEffect(() => {
    if (backdropActive) {
      window.requestAnimationFrame(() => {
        setBackdropOpen(true);
      });
    }
  }, [backdropActive]);
  const removeSuspension = useCallback(() => {
    if (hasClass(document.documentElement, SCROLL_SUSPENDED_CLASS)) {
      const scrollTop = document.body.scrollTop;
      toggleClass(document.documentElement, SCROLL_SUSPENDED_CLASS, false);
      document.documentElement.scrollTop = scrollTop;
    }
  }, []);
  const onTransitionEnd = useCallback(() => {
    if (backdropOpen) {
      if (isFunction(onOpenComplete)) {
        onOpenComplete();
      }
      if (getBodyHeight() > window.innerHeight) {
        const scrollTop = window.scrollY;
        toggleClass(document.documentElement, SCROLL_SUSPENDED_CLASS, true);
        document.body.scrollTop = scrollTop;
      }
    } else {
      setBackdropActive(false);
      if (isFunction(onCloseComplete)) {
        onCloseComplete();
      }
      removeSuspension();
    }
  }, [backdropOpen, onCloseComplete, onOpenComplete, removeSuspension]);
  useEffect(() => {
    return removeSuspension;
  }, [removeSuspension]);
  useEventListener(backdropElement, ['transitionend'], onTransitionEnd);
  return (
    <>
      {backdropActive && (
        <Backdrop
          className={clsx(backdropClassName, 'drawer-backdrop', {
            'drawer-is-open': backdropOpen,
          })}
          onClick={(event: MouseEvent<HTMLDivElement>) => {
            if (closeOnBackdropClick && isFunction(onClose)) {
              onClose(event);
            }
          }}
          ref={backdropRef}
        />
      )}
      <Wrapper
        className={clsx(
          className,
          'drawer-wrapper',
          `drawer-position-${position}`,
          {
            'drawer-is-open': open,
            'drawer-is-cover': size === 'cover',
          },
        )}
        {...rest}
      >
        <Container className="drawer-container">{children}</Container>
      </Wrapper>
    </>
  );
}
