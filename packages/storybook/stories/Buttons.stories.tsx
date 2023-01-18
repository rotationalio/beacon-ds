import { Button } from '@rotationalio/beacon-core';
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
  children: 'Buttons',
  leftIcon: <>😂</>,
  rightIcon: <>😇</>,
  isDisabled: false,
};
