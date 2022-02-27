import React from "react";
import css from "./index.css";

interface OptionalLabel {
  label?: string;
  type: string;
  name: string;
}

export function TextField({ type, name, label }: OptionalLabel) {
  return (
    <div>
      <label className={css.label}>{label}</label>
      <br />
      <input className={css.input} type={type} name={name} required />
    </div>
  );
}
