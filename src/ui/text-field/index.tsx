import React from "react";
import css from "./index.css";

export function TextField({
  type = null,
  name = null,
  label = null,
  defaultValue = null,
}) {
  return (
    <div>
      <label className={css.label}>{label}</label>
      <br />
      <input
        className={css.input}
        type={type}
        name={name}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}

export function TextArea({ name = null, label = null, defaultValue = null }) {
  return (
    <div>
      <label className={css.label}>{label}</label>
      <br />
      <textarea
        className={css.textarea}
        name={name}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
