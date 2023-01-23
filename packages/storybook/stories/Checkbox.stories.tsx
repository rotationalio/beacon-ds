import Checkbox, {
  CheckboxProps,
} from '@rotationalio/beacon-core/src/components/Checkbox';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'beacon/Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'checkbox',
  value: 'unsubscribe',
  children: 'Unsubscribe',
  isDisabled: false,
  //   isSelected: false,
  isIndeterminate: false,
  isReadOnly: false,
  onChange(value) {
    console.log(value);
  },
  'aria-label': 'Unsubscribe',
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  isSelected: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...Default.args,
  isIndeterminate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};
