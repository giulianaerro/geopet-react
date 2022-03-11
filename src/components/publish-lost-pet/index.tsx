import React from "react";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";

export const PublishLostPetComponent = () => {
  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Reportar mi mascota perdida</TextTitle>
      </div>
    </div>
  );
};
