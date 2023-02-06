import { Avatar, AvatarProps } from '@jrb-ui/react';
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: "https://github.com/jjromary.png",
    alt: "Avatar user josé romary"
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}
