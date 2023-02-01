import { Toast, ToastWithRadixProps } from '@rotational/beacon-core';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'beacon/Toast',
  component: Toast,
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
} as Meta<ToastWithRadixProps>;

const Template: Story<ToastWithRadixProps> = (args) => {
  return (
    <div className="p-4">
      <button>
        <Toast {...args} />
      </button>
    </div>
  );
};
export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  children: 'Success',
  variant: 'success',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error',
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Info',
  variant: 'info',
};
