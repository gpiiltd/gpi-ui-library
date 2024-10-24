import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.FC<import("../types").FooterProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        logo: any;
        children: React.JSX.Element;
        bg_color: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const FooterSample: Story;
