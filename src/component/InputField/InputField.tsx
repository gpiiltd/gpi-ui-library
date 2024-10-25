import React, { useState } from "react";
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
  value,

  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
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
          value={value} 
          className={`mt-1 block w-full_width px-3 py-2 border border-primary_color rounded-md shadow-sm focus:outline-none placeholder-primary_color placeholder-opacity-50 placeholder-xs ${
            isFocused ? `focus:border-${focusStyle} focus:ring-${focusStyle}` : ""
          }`}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          style={{
            ...(isFocused ? { borderColor: focusStyle } : {}),
          }}
          {...props}
        />
        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onClick}
        >
          {icon}
        </span>
      </div>
      {helperText && (
        <Typography variant={TypographyVariant.SMALL} className="mt-1">
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default InputField;
