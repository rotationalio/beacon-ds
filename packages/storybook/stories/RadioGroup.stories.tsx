import { Meta, Story } from '@storybook/react';
import RadioGroup, {
  RadioGroupProps,
} from '@rotational/beacon-core/src/components/RadioGroup';
import Radio from '@rotational/beacon-core/src/components/Radio';

export default {
  title: 'beacon/RadioGroup',
  component: RadioGroup,
} as Meta<RadioGroupProps>;

const Template: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Favorite pet',
  errorMessage: 'Error message',
  isReadOnly: false,
  validationState: 'invalid',
  defaultValue: 'cats',
  description: 'Choose your prefered animal',
  isDisabled: false,
  isRequired: false,
};
