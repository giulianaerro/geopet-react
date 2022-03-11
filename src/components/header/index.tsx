import React from "react";
import css from "./index.css";
import { Button } from "../../ui/buttons";
import { MenuHamburger } from "../../ui/menu-hamburger";

export const Header = () => {
  return (
    <div className={css.root}>
      <div className={css.img_icon}></div>
      <MenuHamburger />
      <div className={css.container_tabs}>
        <div className={css.tabs}>
          <a href="/signup" className={css.tab}>
            Mis datos
          </a>
          <a href="/mylostpets" className={css.tab}>
            Mis mascotas reportadas
          </a>
          <a href="/signup" className={css.tab}>
            Reportar mascota
          </a>
          <Button>Ingresar</Button>
        </div>
      </div>
    </div>
  );
};
