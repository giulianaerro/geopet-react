import React from "react";
import { TextTitle, TextSubtitle } from "../../ui/texts";
import css from "./index.css";
import { TextField, TextArea } from "../../ui/text-field";

export const PublishLostPetComponent = () => {
  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Reportar mi mascota perdida</TextTitle>
      </div>
      <div className={css.container__input}>
        <TextField
          type={"name"}
          name={"petName"}
          label={"NOMBRE DE LA MASCOTA"}
        ></TextField>
      </div>
      <div className={css.container__input}>
        <TextArea name={"bio"} label={"BIO"}></TextArea>
      </div>
      <div className={css.container__input}>
        <TextSubtitle>Subi una foto de tu mascota:</TextSubtitle>
      </div>
    </div>
  );
};
