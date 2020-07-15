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

export interface DrawerOptions {
  backdropColor?: string;
  backdropZIndex?: number;
  wrapperZIndex?: number;
}

interface DrawerProps {
  children?: string | ReactElement | ReactElement[];
  onClose?: (event: MouseEvent<HTMLDivElement>) => void;
  onCompleteClose?: () => void;
  onCompleteOpen?: () => void;
  onOpen?: () => void;
  open?: boolean;
  options?: DrawerOptions;
  position?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'auto' | 'cover';
}

const defaultDrawerOptions: DrawerOptions = {
  backdropColor: '#000000',
  backdropZIndex: 9,
  wrapperZIndex: 10,
};

Drawer.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  onCompleteClose: PropTypes.func,
  onCompleteOpen: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  options: PropTypes.shape({
    backdropColor: PropTypes.string,
    backdropZIndex: PropTypes.number,
    wrapperZIndex: PropTypes.number,
  }),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  size: PropTypes.oneOf(['auto', 'cover']),
};

Drawer.defaultProps = {
  open: false,
  options: {},
  position: 'bottom',
  size: 'auto',
};

export default function Drawer({
  children,
  className,
  onClose,
  onCompleteClose,
  onCompleteOpen,
  onOpen,
  open = false,
  options = {},
  position = 'bottom',
  size = 'auto',
  ...props
}: DrawerProps & HTMLAttributes<HTMLElement>): ReactElement {
  const [backdropActive, setBackdropActive] = useState<boolean>(false);
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false);
  const backdropRef = useRef(null);
  const backdropElement: HTMLElement | null = backdropRef?.current;
  const drawerOptions = {
    ...defaultDrawerOptions,
    ...options,
  };
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
      if (isFunction(onCompleteOpen)) {
        onCompleteOpen();
      }
      if (getBodyHeight() > window.innerHeight) {
        const scrollTop = window.scrollY;
        toggleClass(document.documentElement, SCROLL_SUSPENDED_CLASS, true);
        document.body.scrollTop = scrollTop;
      }
    } else {
      setBackdropActive(false);
      if (isFunction(onCompleteClose)) {
        onCompleteClose();
      }
      removeSuspension();
    }
  }, [backdropOpen, onCompleteClose, onCompleteOpen, removeSuspension]);
  useEffect(() => {
    return removeSuspension;
  }, [removeSuspension]);
  useEventListener(backdropElement, ['transitionend'], onTransitionEnd);
  return (
    <>
      {backdropActive && (
        <Backdrop
          className={clsx('drawer-backdrop', {
            'drawer-is-open': backdropOpen,
          })}
          style={{
            backgroundColor: drawerOptions.backdropColor,
            zIndex: drawerOptions.backdropZIndex,
          }}
          onClick={onClose}
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
        style={{
          zIndex: drawerOptions.wrapperZIndex,
        }}
        {...props}
      >
        <Container className="drawer-container">{children}</Container>
      </Wrapper>
    </>
  );
}
