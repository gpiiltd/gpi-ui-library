/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("../types").ButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        bg_color: {
            control: "color";
        };
        text_color: {
            control: "color";
        };
        border_color: {
            control: "color";
        };
        active: {
            control: "boolean";
        };
        loading: {
            control: "boolean";
        };
        text: {
            control: "text";
        };
        onClick: {
            action: string;
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
