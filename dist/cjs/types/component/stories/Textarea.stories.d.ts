import React from "react";
import { Meta } from "@storybook/react";
import TextAreaField from "../TextArea";
declare const meta: Meta<typeof TextAreaField>;
export default meta;
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react/dist/types-a5624094").R, import("../types").TextInputProps & {
    rows?: number | undefined;
} & {
    children?: React.ReactNode;
}>;
export declare const WithError: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react/dist/types-a5624094").R, import("../types").TextInputProps & {
    rows?: number | undefined;
} & {
    children?: React.ReactNode;
}>;
export declare const WithCustomRows: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react/dist/types-a5624094").R, import("../types").TextInputProps & {
    rows?: number | undefined;
} & {
    children?: React.ReactNode;
}>;
