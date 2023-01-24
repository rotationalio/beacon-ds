import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, CardProps } from '@rotationalio/beacon-core';

export default {
  title: 'beacon/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Content goes here',
  containerClasses: 'bg-white shadow-lg rounded-lg',
  contentClasses: 'p-4',
} as CardProps;
