import * as React from "react";
import css from "./index.css";

export function PetCard({ imageDataURL, bio, petName, objectID }) {
  return (
    <div className={css.petsaround_cards__container}>
      <div className={css.pet_card}>
        <img
          crossOrigin="anonymous"
          src={imageDataURL}
          className={css.pet_img}
        />
        <div className={css.pet__card_content}>
          <h3 className={css.pet__card_title}>{petName}</h3>
          <p className={css.pet__card_text}>{bio}</p>
          <a id={`pet__${objectID}`} className={css.pet__card_link}>
            Reportar
          </a>
        </div>
      </div>
    </div>
  );
}
