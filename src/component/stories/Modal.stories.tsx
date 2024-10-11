import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import logo from "../../assets/logo.svg";

import Modal from "../Modal/Modal";

const meta = {
  title: "GPI UI Library/Modal",
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    isOpen: true,
    onClose: fn(),
    children: <div>Hello</div>,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalSample: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    width: "500px",
    children: (
      <div className="flex flex-col my-4">
        <img src={logo} alt="logo" className="w-20 h-20 mx-auto align-left" />
        <h2 className="text-lg font-bold  text-blue-500 ">GPI Modal</h2>
        <p>This is the content of the modal!</p>
        <p>more content here </p>
      </div>
    ),
  },
};

// export const LoggedOut: Story = {};
