import { Popper, StyledListbox, StyledMenuItem } from './Menu.styles';
import { MenuUnstyled } from '@mui/base';
import React from 'react';

export interface MenuSectionProps {
  children: React.ReactNode;
  label: string;
}

const Menu = (props: React.ComponentPropsWithoutRef<typeof MenuUnstyled>) => {
  const { slots, ...rest } = props;
  return (
    <MenuUnstyled
      slots={{ root: Popper, listbox: StyledListbox, ...slots }}
      {...rest}
    />
  );
};

Menu.Item = StyledMenuItem;

export default Menu;
