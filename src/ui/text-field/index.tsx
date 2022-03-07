import React from "react";
import css from "./index.css";

export function TextField({ type = null, name = null, label = null }) {
  return (
    <div>
      <label className={css.label}>{label}</label>
      <br />
      <input className={css.input} type={type} name={name} required />
    </div>
  );
}
