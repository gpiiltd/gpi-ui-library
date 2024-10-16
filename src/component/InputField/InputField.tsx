import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import { TextInputProps, TypographyVariant } from "../types";
import Typography from "../Typography/Typography";

const InputField: React.FC<TextInputProps> = ({
  label,
  helperText,
  placeHolder,
  icon,
  type,
  onClick,
  focusStyle,
  ...props
}) => {
  const [field, meta] = useField(props.name);
  const { setTouched, validateField } = useFormikContext();
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setTouched({ [props.name]: true });
    setIsFocused(false);

  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    setTouched({ [props.name]: true });
    validateField(props.name);
  };

  return (
    <div className="mb-4">
      <label htmlFor={props.name}>
        <Typography variant={TypographyVariant.NORMAL}>{label}</Typography>
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeHolder}
          className={`mt-1 block w-full_width px-3 py-2 border border-primary_color rounded-md shadow-sm focus:outline-none placeholder-primary_color placeholder-opacity-50 placeholder-xs ${
            meta.touched && meta.error
              ? "border border-error focus:border-error focus:ring-error"
              : `focus:border-${focusStyle} focus:ring-${focusStyle}`
          }`}
          {...field}
          {...props}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          style={{
            ...(isFocused ? { borderColor: focusStyle } : {}),
          }}
        />
        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onClick}
        >
          {icon}
        </span>
      </div>
      {meta.touched && meta.error ? (
        <Typography
          variant={TypographyVariant.SMALL}
          className="text-error mt-1"
        >
          {meta.error}
        </Typography>
      ) : (
        helperText && (
          <Typography variant={TypographyVariant.SMALL} className="mt-1">
            {meta.error}
          </Typography>
        )
      )}
    </div>
  );
};

export default InputField;

