import React from "react";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";
import { hasAuth } from "../../hooks";

export const SignUpComponent = () => {
  const auth = hasAuth();

  const handleSubmit = (e) => {
    if (auth == "") {
      e.preventDefault();
      const fullName = e.target.name.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;

      if (password === confirmPassword) {
      }
    }
  };

  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Mis datos</TextTitle>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container__text_field}>
          <TextField type={"name"} name={"name"} label={"NOMBRE"}></TextField>
        </div>

        <div className={css.container__text_field_password}>
          <TextField
            type={"password"}
            name={"password"}
            label={"CONTRASEÑA"}
          ></TextField>
        </div>
        <div className={css.container__text_field}>
          <TextField
            type={"password"}
            name={"password"}
            label={"REPETIR CONTRASEÑA"}
          ></TextField>
        </div>
        <MainButton>Guardar</MainButton>
      </form>
    </div>
  );
};
