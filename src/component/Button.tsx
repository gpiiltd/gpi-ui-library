import React, { FC } from "react";
import { ButtonProps } from "./types";
import { FadeLoader } from "react-spinners";

const Button: FC<ButtonProps> = ({
  text,
  loading,
  onClick,
  active,
  bg_color,
  text_color,
  border_color,
}) => {
  return (
    <div
      className={`w-full_width flex items-center justify-center content-cenyter  py-2  rounded-md  font-medium transition duration-300 border-2 border-transparent ${
        active ? "" : "opacity-30"
      }`}
      style={{
        backgroundColor: bg_color,
        color: text_color,
        borderWidth: active ? "2" : "0",
        borderColor: active ? border_color : "transparent",
      }}
    >
      <button
        onClick={onClick}
        disabled={loading || !active}
        className={`w-full_width h-button_height border-none flex justify-center items-center font-bold ${
          loading ? "pt-5" : "pt-0"
        }`}
      >
        {loading ? (
          <FadeLoader color="#B8C1CB" radius={2} height={6} margin={-5} />
        ) : (
          <span>{text}</span>
        )}
      </button>
    </div>
  );
};

export default Button;
