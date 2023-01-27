import Modal, {
  ModalProps,
} from '@rotational/beacon-core/src/components/Modal';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'beacon/Modal',
  component: Modal,
} as Meta<ModalProps>;

const Template: Story<ModalProps> = (args) => {
  return <Modal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'small',
  fullScreen: false,
  open: true,
  title: 'Change password',
  children: (
    <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, error</>
  ),
};
