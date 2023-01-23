import { MenuTriggerState } from '@react-stately/menu';
import Button from 'components/Button';
import React from 'react';
import {
  useMenuTrigger,
  useMenu,
  useMenuItem,
  useMenuSection,
  AriaMenuTriggerProps,
} from 'react-aria';

export type MenuButtonProps = {
  children: React.ReactNode;
} & AriaMenuTriggerProps &
  MenuTriggerState;

function MenuButton(props: MenuButtonProps) {
  const {
    focusStrategy,
    open,
    toggle,
    close,
    setOpen,
    isOpen,
    children: child,
  } = props;
  const state = {
    focusStrategy,
    open,
    toggle,
    close,
    setOpen,
    isOpen,
  };
  const ref = React.useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  if (React.isValidElement(child)) {
    return React.cloneElement(child, {});
  }

  return null;
}

export default MenuButton;
