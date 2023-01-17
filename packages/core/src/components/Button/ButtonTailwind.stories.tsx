import { Button } from './ButtonTailwind';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@rotationalio/beacon-core/lib/style.css';

export default {
  title: 'beacon/Tailwind Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
