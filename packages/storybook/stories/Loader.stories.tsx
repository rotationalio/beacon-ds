import { Loader } from '@rotational/beacon-core';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'beacon/Loader',
  component: Loader,
} as Meta<typeof Loader>;

const Template: Story<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

export const XSmall = Template.bind({});
XSmall.args = {
  size: 'xs',
  content: 'Loading...',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xl',
  color: 'primary-500',
};
