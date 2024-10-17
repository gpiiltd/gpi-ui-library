import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../InputField';

const meta: Meta = {
  title: 'GPI UI Library/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', 
  },
};

export default meta;

const Template: StoryFn = (args) => (
  <Formik
    initialValues={{ input: '' }}
    validationSchema={Yup.object({
      input: Yup.string().required('This field is required'),
    })}
    onSubmit={(values) => {
      console.log('Form Submitted', values);
    }}
  >
    <Form>
      <InputField label={''} {...args} name="input" />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  placeHolder: 'Enter text...',
  type: 'text',
  focusStyle: 'blue', 
  helperText: 'This is a helper text',
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M10 14a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" />
  </svg>,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input With Error',
  placeHolder: 'Enter text...',
  type: 'text',
  focusStyle: 'red', 
  helperText: 'This field requires input',
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M10 14a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" />
  </svg>,
};


