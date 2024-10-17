import React from "react";
import { Meta, StoryFn } from "@storybook/react"; 
import { Formik } from "formik";
import TextAreaField from "../TextArea";

const meta: Meta<typeof TextAreaField> = {
  title: "GPI UI Library/TextAreaField",
  component: TextAreaField,
  argTypes: {
    focusStyle: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof TextAreaField> = (args:any) => (
  <Formik
    initialValues={{ textArea: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {() => <TextAreaField {...args} />}
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: "Your Message",
  name: "textArea",
  placeholder: "Type your message here...",
  helperText: "You can type up to 500 characters.",
  focusStyle: "blue", 
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Your Message",
  name: "textArea",
  placeholder: "Type your message here...",
  helperText: "You can type up to 500 characters.",
  focusStyle: "red", 
};

export const WithCustomRows = Template.bind({});
WithCustomRows.args = {
  label: "Your Message",
  name: "textArea",
  placeholder: "Type your message here...",
  rows: 10, 
  focusStyle: "green", 
};
