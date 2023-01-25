import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, GridProps } from '@rotational/beacon-core';

export default {
  title: 'beacon/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Grid',
  columns: 1,
  gapX: 2,
  gapY: 2,
  justify: 'start',
  align: 'stretch',
  flow: 'row',
} as GridProps;
