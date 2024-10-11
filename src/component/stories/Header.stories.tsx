import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import logo from "../../assets/logo.svg";

import Header from "../Header/Header";

const meta = {
  title: "GPI UI Library/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    logo: logo,
    children: <div>Hello</div>,
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderSample: Story = {
  args: {
    logo: logo,
    children: <div>Hello today</div>,
  },
};

// export const LoggedOut: Story = {};
