import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.FC<import("../types").BreadcrumbProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        steps: {
            label: string;
            route: string;
        }[];
        currentStep: number;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BreadcrumbSample: Story;
