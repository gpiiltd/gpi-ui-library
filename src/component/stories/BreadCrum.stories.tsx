import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "../BreadCrum/BreadCrum";

const meta = {
  title: "GPI UI Library/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    steps: [
      { label: "Step 1", route: "/step-1" },
      { label: "Step 2", route: "/step-2" },
      { label: "Step 3", route: "/step-3" },
    ],
    currentStep: 1, 
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbSample: Story = {
  args: {
    steps: [
      { label: "Step 1", route: "/step-1" },
      { label: "Step 2", route: "/step-2" },
      { label: "Step 3", route: "/step-3" },
    ],
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};
