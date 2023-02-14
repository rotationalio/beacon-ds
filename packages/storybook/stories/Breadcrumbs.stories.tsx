import { Meta, Story } from '@storybook/react';
import {
  Breadcrumbs,
  BreadcrumbsProps,
} from '@rotational/beacon-core/src/components/Breadcrumbs';

export default {
  title: 'beacon/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<BreadcrumbsProps>;

const Template: Story<BreadcrumbsProps> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item>Item 1</Breadcrumbs.Item>
    <Breadcrumbs.Item>Item 2</Breadcrumbs.Item>
    <Breadcrumbs.Item>Item 3</Breadcrumbs.Item>
  </Breadcrumbs>
);

export const Default = Template.bind({});
Default.args = {
  separator: '/',
};
