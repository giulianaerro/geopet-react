import React from "react";
import css from "./index.css";

export function MainButton({ children, bgColor = null, borderOption = null }) {
  return (
    <button
      style={{ backgroundColor: bgColor, border: borderOption }}
      className={css.button}
    >
      {children}
    </button>
  );
}
