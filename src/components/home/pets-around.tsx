import React from "react";
import { TextTitle } from "../../ui/texts";
import css from "./pets-around.css";
import { PetCard } from "../../ui/pet-card";

export const PetsAround = ({ petsAround }) => {
  if (!petsAround) return null;

  return (
    <div>
      <TextTitle className={css.text_title}>
        {petsAround.length == 0
          ? "No hay mascotas perdidas cerca tuyo"
          : "Mascotas perdidas cerca tuyo"}
      </TextTitle>

      {petsAround.map((p) => (
        <PetCard
          petName={p.petName}
          objectID={p.objectId}
          imageDataURL={p.imageDataURL}
          bio={p.bio}
        ></PetCard>
      ))}
    </div>
  );
};
