import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TextInputProps } from "../types";
import { FiEye } from "react-icons/fi";
import InputField from "../InputField";

export default {
  title: "GPI UI Library/InputField",
  component: InputField,
} as Meta;

const Template: StoryFn<TextInputProps> = (args:any) => <InputField {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: "Username",
  placeHolder: "Enter your username",
  type: "text",
  focusStyle: "blue",
  helperText: "This is a required field.",
  value: "", 

};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Password",
  placeHolder: "Enter your password",
  type: "password",
  focusStyle: "green",
  helperText: "Ensure your password is strong.",
  icon: <FiEye />,
  onClick: () => alert("Show/Hide password"),
  value: "",
};
