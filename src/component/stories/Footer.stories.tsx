import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../Footer";
import logo from "../../assets/logo.svg";

const meta = {
  title: "GPI UI Library/Footer",
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    logo: logo,
    children: (
      <div> &copy; GPI. All rights reserved.</div>
    ),
    bg_color: "black",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterSample: Story = {
  args: {
    logo: logo,
    children: <div> &copy; GPI. All rights reserved.</div>,
    bg_color: "black",
  },
};

