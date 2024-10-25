import React, { FC } from "react";
import { ButtonProps } from "../types";
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
    style={{
      width: '100%',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem', 
      padding: '0.5rem 0.75rem', 
      borderRadius: '0.380rem', 
      fontWeight: '500', 
      transition: 'all 0.3s', 
      backgroundColor: bg_color,
      color: text_color,
      opacity: active ? 1 : 0.3,
      borderWidth: active ? 2 : 0,
      borderColor: active ? border_color : 'transparent',
      borderStyle: 'solid', 
    }}
    >
      <button
        onClick={onClick}
        disabled={loading || !active}
        style={{
          width: '100%',
          height: 'var(--button-height)', 
          padding: loading ? '1.25rem 0.75rem 0.5rem 0.75rem' : '0.5rem 0.75rem', 
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1rem',
          letterSpacing: '0.05em', 
          fontWeight: 'bold',
        }}
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
