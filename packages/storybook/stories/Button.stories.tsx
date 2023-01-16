// import { Button, ButtonProps } from '@rotationalio/beacon-core';
import { Button } from '@rotationalio/beacon-core/src/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'beacon/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
