import { Button } from '@rotational/beacon-core';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'beacon/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  disabled: false,
  isLoading: false,
  className: '',
  onclick: () => {
    console.log('clicked');
  },
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  variant: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...Default.args,
  variant: 'ghost',
};

export const onClickButton = Template.bind({});
onClickButton.args = {
  ...Default.args,
  onClick: () => alert('onClick works!'),
};

export const roundedButton = Template.bind({});

roundedButton.args = {
  ...Default.args,
  className: 'rounded-full',
};

export const ButtonWithLeftIcon = Template.bind({});
ButtonWithLeftIcon.args = {
  ...Default.args,
  leftIcon: '👍',
};

export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
  ...Default.args,
  rightIcon: '👍',
};

export const ButtonWithLeftAndRightIcon = Template.bind({});
ButtonWithLeftAndRightIcon.args = {
  ...Default.args,
  leftIcon: '👍',
  rightIcon: '👍',
};
