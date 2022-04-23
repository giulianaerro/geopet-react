import * as React from "react";
import css from "./index.css";

export function PetCard({
  imageDataURL,
  displayDeleteButton = null,
  bio,
  petName,
  buttonName,
  petPublic = false,
  onClick = null,
  handleClick = null,
}) {
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
          <a onClick={onClick} className={css.pet__card_link}>
            {buttonName}
          </a>
          {petPublic ? (
            <button
              onClick={handleClick}
              style={{
                padding: "5px 10px",
                color: "white",
                fontFamily: "Poppins",
                borderRadius: 10,
                border: "5px solid var(--naranja-rojizo)",
                backgroundColor: "var(--naranja)",
                display: `${displayDeleteButton}`,
              }}
            >
              Eliminar
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
