import React from "react";
import { useField } from "formik";
import { TextInputProps, TypographyVariant } from "../types";
import Typography from "../Typography";


const InputField: React.FC<TextInputProps> = ({
  label,
  helperText,
  placeHolder,
  ...props
}) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="mb-4">
      <label
        htmlFor={props.name}
      >
        <Typography variant={TypographyVariant.NORMAL}>{label}</Typography>
      </label>
      <input
        placeholder={placeHolder}
        className={`mt-1 block w-full_width px-3 py-2 border border-primary_color rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-primary_color placeholder-opacity-50 placeholder-xs ${
          meta.touched && meta.error ? "border border-error" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Typography
          variant={TypographyVariant.SMALL}
          className="text-error mt-1"
        >
          {meta.error}
        </Typography>
      ) : (
        helperText && (
          <Typography
            variant={TypographyVariant.SMALL}
            className="mt-1"
          >
            {meta.error}
          </Typography>
        )
      )}
    </div>
  );
};

export default InputField;
