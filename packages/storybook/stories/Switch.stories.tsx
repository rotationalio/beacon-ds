import { Meta, Story } from '@storybook/react';
import Switch, {
  SwitchProps,
} from '@rotational/beacon-core/src/components/Switch';

export default {
  title: 'beacon/Switch',
  component: Switch,
} as Meta<SwitchProps>;

const Template: Story<SwitchProps> = (args) => (
  <Switch {...args}>Low power mode</Switch>
);

export const Default = Template.bind({});
Default.args = {
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  isSelected: false,
  defaultSelected: false,
  onChange: (value) => {
    console.log(value);
  },
  validationState: 'valid',
  value: '',
  name: 'mode',
};
