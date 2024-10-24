/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("../types").SearchBarProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        placeholder: string;
        suggestions: string[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SearchBarSample: Story;
