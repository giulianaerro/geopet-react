import React from "react";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";

export const AuthComponent = () => {
  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Ingresar</TextTitle>
      </div>
      <div className={css.container__text_field}>
        <TextField type={"email"} name={"email"} label={"EMAIL"}></TextField>
      </div>
      <MainButton>Siguiente</MainButton>
    </div>
  );
};
