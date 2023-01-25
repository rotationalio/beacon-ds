import { Button } from '@rotational/beacon-core/src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'beacon/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  leftIcon: <>😂</>,
  rightIcon: <>😇</>,
  isDisabled: false,
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

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  color: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  color: 'error',
};
