import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.FC<import("../types").ModalProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        isOpen: true;
        onClose: import("@vitest/spy").Mock<(...args: any[]) => any>;
        children: React.JSX.Element;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ModalSample: Story;
