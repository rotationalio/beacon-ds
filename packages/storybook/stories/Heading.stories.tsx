import Heading from '@rotational/beacon-core/src/components/Heading';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'beacon/Heading',
  component: Heading,
} as Meta<typeof Heading>;

const Template: Story<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Heading',
  level: 2,
  className: 'bg-primary-900',
};
