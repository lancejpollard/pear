import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pear, { PearVLayoutProps } from '..';

const meta: Meta = {
  title: 'Layout / V',
  component: Pear.Layout.V,
  argTypes: {
    valign: {
      options: ['top', 'center', 'bottom'],
      control: {
        type: 'select',
      },
    },
    halign: {
      options: ['left', 'center', 'right'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

const Template: Story<PearVLayoutProps> = args => {
  return <Pear.Layout.V {...args} />
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  style: { height: '300px' },
  valign: 'top',
  halign: 'left',
  children: (
    <>
      <span>a</span>
      <span>b</span>
      <span>c</span>
    </>
  )
};
