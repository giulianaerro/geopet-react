import React from "react";
import css from "./index.css";
import { MainButton } from "../../ui/buttons";
import { Text } from "../../ui/texts";

export const Header = () => {
  return (
    <div className={css.root}>
      <div className={css.img_icon}></div>
      <div className={css.tabs}>
        <Text className={css.tab}>Mis datos</Text>
        <Text className={css.tab}>Mis mascotas reportadas</Text>
        <Text className={css.tab}>Reportar mascota</Text>
        <MainButton>Ingresar</MainButton>
      </div>
    </div>
  );
};
