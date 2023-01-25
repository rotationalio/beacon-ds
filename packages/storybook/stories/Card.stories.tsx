import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '@rotationalio/beacon-core';

export default {
  title: 'beacon/Card',
  component: Card,
} as Meta;

const Template: Story<typeof Card> = (args) => {
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
  title: 'Card Title',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card Title',
  imgSrc: 'https://source.unsplash.com/random/400x200',
};

export const WithImageAndClassnames = Template.bind({});
WithImageAndClassnames.args = {
  title: 'Card Title',
  imgSrc: 'https://source.unsplash.com/random/400x200',
  imgPosition: 'left',
  imgClassNames: 'w-1/2',
};
