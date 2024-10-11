import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import logo from "../../assets/logo.svg";

import Card from "../Card/Card";

const meta = {
  title: "GPI UI Library/Card",
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
    args: {
      titleLeft: <h2 className="text-lg font-bold">Title Left</h2>,
      titleRight: <h2 className="text-lg font-bold">Title Right</h2>,
      children: <p>This is the content of the card!</p>,
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardSample: Story = {
  args: {
    titleLeft: <h2 className="text-lg font-bold">Title Left</h2>,
    titleRight: <h2 className="text-lg font-bold">Title Right</h2>,
    children: <p>This is the content of the card!</p>,
  },
};

// export const LoggedOut: Story = {};
