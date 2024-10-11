import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "../Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "GPI UI Library/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    bg_color: { control: "color" },
    text_color: { control: "color" },
    border_color: { control: "color" },
    active: { control: "boolean" },
    loading: { control: "boolean" },
    text: { control: "text" },
    onClick: { action: "clicked" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "GPI Button",
    active: true,
  },
};

export const Secondary: Story = {
  args: {
    text: "GPI Button",
    active: false,
  },
};
