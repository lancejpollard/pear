import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pear, { PearHLayoutProps } from '..';

const meta: Meta = {
  title: 'Layout / H',
  component: Pear.Layout.H,
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

const Template: Story<PearHLayoutProps> = args => <Pear.Layout.H {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <span>a</span>
      <span>b</span>
      <span>c</span>
    </>
  )
};
