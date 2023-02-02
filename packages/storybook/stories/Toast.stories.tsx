import { Toast, ToastWithRadixProps } from '@rotational/beacon-core';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
export default {
  title: 'beacon/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'success',
          'danger',
          'warning',
          'info',
          'primary',
          'secondary',
        ],
      },
    },
    hasIcon: {
      control: {
        type: 'boolean',
      },
    },
    placement: {
      control: {
        type: 'select',
        options: ['up', 'down', 'left', 'right'],
      },
    },
    duration: {
      control: {
        type: 'number',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {},
} as Meta<ToastWithRadixProps>;

const Template: Story<ToastWithRadixProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button onClick={onOpen}>Open Toast</button>
      <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  description: 'This is a default toast',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  description: 'This is a success toast',
  variant: 'success',
  hasIcon: true,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'danger',
  title: 'Error',
  hasIcon: true,
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning',
  description: 'This is a warning toast',
  hasIcon: true,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  title: 'Info',
  description: 'This is an info toast',
  hasIcon: true,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'default',
  title: 'Ghost',
  description: 'This is a ghost toast',
};
