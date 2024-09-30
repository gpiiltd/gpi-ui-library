import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "../Button";

interface FormValues {
  fullName: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const MyForm: React.FC = () => {
  const initialValues: FormValues = { fullName: "", email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form className="space-y-6">
          <InputField
            label="Full Name"
            name="fullName"
            placeHolder="Enter your full name"
          
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeHolder="Enter your email"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeHolder="Enter your password"
          />
          <Button
            text="Submit"
            loading={false}
            onClick={handleSubmit}
            active={true}
            bg_color="green"
            text_color="white"
            border_color="black"
          />
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
