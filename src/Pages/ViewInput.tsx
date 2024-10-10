import { Form, Formik } from "formik";
import InputField from "../component/Input/InputField";
import Typography from "../component/Typography";
import { TypographyVariant } from "../component/types";
import { FaRegEye } from "react-icons/fa";
import * as Yup from "yup";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import TableComponent from "../component/PropsDescription";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const data = [
  {
    name: "label",
    description: "The label text displayed above the input field",
  },
  {
    name: "helperText",
    description:
      "Optional text displayed below the input field to provide additional guidance or information to the user..",
    highlightText: ["additional"],
  },
  {
    name: "placeHolder",
    description:
      "Placeholder text shown inside the input field when it is empty",
  },
  {
    name: "icon",
    description:
      "An optional icon that appears within the input field, typically on the right side, to represent additional actions",
  },
  {
    name: "type",
    description:
      "The type of input (e.g., text, password, email). Defines the input behavior.",
    highlightText: ["text", "password", "email"],
  },
  {
    name: "onClick",
    description:
      "Event handler for when the icon inside the input field is clicked.",
  },
  {
    name: "focusStyle",
    description:
      "The style applied to the input field when it is in focus (e.g., a color for the border and focus ring)",
  },
  {
    name: "name",
    description:
      "The name attribute used by Formik to identify the input field for validation and form management",
  },
  {
    name: "...props",
    description:
      "Other props passed to the input element, such as value, onChange, or any other attributes required by the input",
  },
];

const ViewInput = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div>
      <div className="pt-6">
        <Typography variant={TypographyVariant.TITLE} className="text-black">
          Form Input
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Form values:", values);
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <InputField
              placeHolder="Enter your email address"
              type="text"
              focusStyle="active_color"
              label="Email"
              name="email"
            />
            <InputField
              placeHolder="Enter your password"
              type={showPassword ? "password" : "text"}
              focusStyle="active_color"
              label="Password"
              name="password"
              onClick={() => setShowPassword(!showPassword)}
              icon={showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            />
          </Form>
        </Formik>

        <TableComponent rows={data} />
      </div>
    </div>
  );
};

export default ViewInput;
