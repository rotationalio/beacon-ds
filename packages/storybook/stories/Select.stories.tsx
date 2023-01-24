// select stories for storybook

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, SelectProps } from '@rotationalio/beacon-core';

export default {
  title: 'beacon/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Select',
  className: 'border-red-500',
} as SelectProps;

export const WithOptions = Template.bind({});
WithOptions.args = {
  children: 'Select',
  className: 'border-red-500',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
} as SelectProps;

export const WithSelectedOption = Template.bind({});

WithOptions.args = {
  children: 'Select',
  className: 'border-red-500',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  selectedOption: '2',
} as SelectProps;
