import React from "react";
import css from "./index.css";

export function Button({
  onClick = null,
  children,
  bgColor = null,
  borderOption = null,
  fontSize = null,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        border: borderOption,
        fontSize: fontSize,
      }}
      className={css.button}
    >
      {children}
    </button>
  );
}

export function MainButton({ onClick = null, children }) {
  return (
    <button onClick={onClick} className={`${css.button} ${css.button_main}`}>
      {children}
    </button>
  );
}
