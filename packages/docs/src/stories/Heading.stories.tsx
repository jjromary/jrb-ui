import { Heading, HeadingProps } from '@jrb-ui/react';
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustonTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o heading sempre será um `h1` mas podemos alterar isso com a porpriedade `as`"
      }
    }
  }
}

