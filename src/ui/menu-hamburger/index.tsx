import React, { useState } from "react";
import css from "./index.css";
import { Button } from "../../ui/buttons";
import { hasAuth } from "../../hooks";

export const MenuHamburger = () => {
  const auth = hasAuth();
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleClick = () => {
    localStorage.removeItem("recoil-persist");
  };
  const isActiveConditional = isActive ? css.is_active : "";

  return (
    <div className={css.root}>
      <div
        className={`${css.hamburger} ${isActiveConditional}`}
        onClick={handleToggle}
      >
        <div className={`${css._layer} ${css._top}`}></div>
        <div className={`${css._layer} ${css._mid}`}></div>
        <div className={`${css._layer} ${css._bottom}`}></div>
      </div>

      <div
        className={`${css.header__container_ventana} ${isActiveConditional}`}
      >
        <div className={css.container__button}>
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
        <div>
          <a href="/signup" className={`${css.ventana_content}`}>
            Mis datos
          </a>
          <a href="/mylostpet" className={`${css.ventana_content}`}>
            Mis mascotas reportadas
          </a>
          <a href="/reportpet" className={`${css.ventana_content}`}>
            Reportar mascota
          </a>
          <div className="ventana_button"></div>
        </div>
      </div>
    </div>
  );
};
