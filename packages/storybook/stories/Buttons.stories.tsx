<<<<<<<< HEAD:packages/core/src/components/Button/Button.stories.tsx
import { Button } from '.';

========
import { Button } from '@rotationalio/beacon-core/src';
>>>>>>>> origin/master:packages/storybook/stories/Buttons.stories.tsx
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
