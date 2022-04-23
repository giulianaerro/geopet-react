import React, { useEffect, useState } from "react";
import css from "./index.css";
import { Button } from "../../ui/buttons";
import { MenuHamburger } from "../../ui/menu-hamburger";
import { hasAuth, useTokenState } from "../../hooks";
import geopet from "../../assets/geopet.png";

export const Header = () => {
  const auth = hasAuth();
  const [token, setToken] = useState({});

  const handleClick = () => {
    localStorage.removeItem("recoil-persist");
  };

  return (
    <div className={css.root}>
      <a href="/">
        <img src={geopet} className={css.img_icon}></img>
      </a>
      <MenuHamburger />
      <div className={css.container_tabs}>
        <div className={css.tabs}>
          <a href={auth ? "/signup" : "/auth"} className={css.tab}>
            Mis datos
          </a>
          <a href={auth ? "/mylostpet" : "/auth"} className={css.tab}>
            Mis mascotas reportadas
          </a>
          <a href={auth ? "/reportpet" : "/auth"} className={css.tab}>
            Reportar mascota
          </a>
          {auth ? (
            <a href="/">
              <Button
                onClick={handleClick}
                bgColor={"var(--azul)"}
                borderOption={"5px solid var(--azul-marino)"}
              >
                Cerrar sesion
              </Button>
            </a>
          ) : (
            <a href="/auth">
              <Button>Ingresar</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
