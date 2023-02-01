import { TextField } from '@rotational/beacon-core/src/components/TextField';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'beacon/TextField',
  component: TextField,
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  description: 'Enter an email for us to contact you about your order.',
  errorMessage: 'error message',
  pattern: '',
  placeholder: 'Enter your email',
  isDisabled: false,
  minLength: 5,
  type: 'password',
  size: 'medium',
  isRequired: false,
  isReadOnly: false,
};
