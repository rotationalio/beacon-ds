import Tooltip from '@rotational/beacon-core/src/components/Tooltip';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'beacon/Tooltip',
  component: Tooltip,
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Hello World',
  children: <>Hover me</>,
};
