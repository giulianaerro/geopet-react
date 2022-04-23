import React, { useState } from "react";
import { TextTitle } from "../../ui/texts";
import css from "./pets-around.css";
import { PetCard } from "../../ui/pet-card";
import { ModalReport } from "../../ui/modal";

export const PetsAround = ({ petsAround }) => {
  if (!petsAround) return null;
  const [openModal, setOpenModal] = useState(false);
  const [valuePetCard, setValuePetCard]: any = useState(null);

  return (
    <div>
      <TextTitle className={css.text_title}>
        {petsAround.length == 0
          ? "No hay mascotas perdidas cerca tuyo"
          : "Mascotas perdidas cerca tuyo"}
      </TextTitle>

      {petsAround.map((p, i) => (
        <div>
          <div onClick={() => setValuePetCard(i)}>
            <PetCard
              petName={p.petName}
              imageDataURL={p.imageDataURL}
              bio={p.bio}
              buttonName={"Reportar"}
              onClick={() => setOpenModal(true)}
            ></PetCard>
          </div>
        </div>
      ))}
      {openModal && (
        <ModalReport
          petValue={petsAround[valuePetCard]}
          onClick={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};
