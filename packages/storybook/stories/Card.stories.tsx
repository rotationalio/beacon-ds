import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '@rotational/beacon-core';

export default {
  title: 'beacon/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <Card.Header>
        <div> Header </div>
      </Card.Header>
      <Card.Body>
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
      </Card.Body>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: 'bg-green-light flex items-center justify-center',
};

export const WithImage = Template.bind({});
WithImage.args = {
  imgSrc: 'https://source.unsplash.com/random/400x200',
  imgAlt: 'random image',
  contentClassName: 'ml-10',
};
