import React from "react";
import css from "./index.css";
import { Button } from "../../ui/buttons";
import { MenuHamburger } from "../../ui/menu-hamburger";

export const Header = () => {
  return (
    <div className={css.root}>
      <a href="/">
        <div className={css.img_icon}></div>
      </a>
      <MenuHamburger />
      <div className={css.container_tabs}>
        <div className={css.tabs}>
          <a href="/signup" className={css.tab}>
            Mis datos
          </a>
          <a href="/mylostpet" className={css.tab}>
            Mis mascotas reportadas
          </a>
          <a href="/reportpet" className={css.tab}>
            Reportar mascota
          </a>
          <a href="/auth">
            <Button>Ingresar</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
