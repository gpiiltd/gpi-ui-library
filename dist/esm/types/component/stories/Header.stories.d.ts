import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.FC<import("../types").HeaderProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        logo: any;
        children: React.JSX.Element;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const HeaderSample: Story;
