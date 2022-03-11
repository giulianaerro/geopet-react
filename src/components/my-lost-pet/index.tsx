import React from "react";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";

export const MyLostPetComponent = () => {
  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Mis mascotas publicadas</TextTitle>
      </div>
    </div>
  );
};
