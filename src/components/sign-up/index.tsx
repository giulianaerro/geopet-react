import React from "react";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";

export const SignUpComponent = () => {
  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Mis datos</TextTitle>
      </div>

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
    </div>
  );
};
