import { MenuUnstyledActions } from '@mui/base';
import { Button } from '@rotational/beacon-core';
import Menu from '@rotational/beacon-core/src/components/Menu';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'beacon/Menu',
  component: Menu,
} as Meta<typeof Menu>;

const Template: Story<typeof Menu> = (args) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const isOpen = Boolean(anchorEl);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuActions = React.useRef<MenuUnstyledActions>(null);
  const preventReopen = React.useRef(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }

    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      if (event.key === 'ArrowUp') {
        menuActions.current?.highlightLastItem();
      }
    }
  };

  const close = () => {
    setAnchorEl(null);
    buttonRef.current!.focus();
  };

  return (
    <div className="text-center">
      <div>
        <Button
          type="button"
          onClick={handleButtonClick}
          onKeyDown={handleButtonKeyDown}
          ref={buttonRef}
          aria-controls={isOpen ? 'wrapped-menu' : undefined}
          aria-expanded={isOpen || undefined}
          aria-haspopup="menu"
        >
          Options
        </Button>
        <Menu
          actions={menuActions}
          open={isOpen}
          onClose={close}
          anchorEl={anchorEl}
          slotProps={{ listbox: { id: 'simple-menu' } }}
        >
          <Menu.Item>Back</Menu.Item>
          <Menu.Item disabled>Forward</Menu.Item>
          <Menu.Item>Refresh</Menu.Item>
          <Menu.Item>Save as...</Menu.Item>
          <Menu.Item>Print...</Menu.Item>
          <Menu.Item>Zoom in</Menu.Item>
          <Menu.Item>Zoom out</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
