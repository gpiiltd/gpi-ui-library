import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.FC<import("../types").CardProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        titleLeft: React.JSX.Element;
        titleRight: React.JSX.Element;
        children: React.JSX.Element;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CardSample: Story;
