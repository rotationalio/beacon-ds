import { Spinner } from '@rotational/beacon-core';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'beacon/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

const Template: Story<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({
  size: 'sm',
  variant: 'dark',
});
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
