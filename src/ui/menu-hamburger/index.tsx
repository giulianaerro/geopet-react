import React, { useState } from "react";
import css from "./index.css";

export const MenuHamburger = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
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
