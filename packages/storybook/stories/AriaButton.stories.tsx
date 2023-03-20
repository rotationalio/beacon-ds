import { AriaButton } from '@rotational/beacon-core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'beacon/AriaButton',
  component: AriaButton,
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
} as ComponentMeta<typeof AriaButton>;

const Template: ComponentStory<typeof AriaButton> = (args) => (
  <AriaButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  leftIcon: <>😂</>,
  rightIcon: <>😇</>,
  isDisabled: false,
  isLoading: false,
  size: 'small',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Default.args,
  variant: 'tertiary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...Default.args,
  variant: 'ghost',
};
