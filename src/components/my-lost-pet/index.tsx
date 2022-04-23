import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hasAuth } from "../../hooks";
import { deletePetReport, getMyPets } from "../../lib/api";
import { PetCard } from "../../ui/pet-card";
import { TextTitle } from "../../ui/texts";
import { PublishLostPetComponent } from "../publish-lost-pet";
import css from "./index.css";

export const MyLostPetComponent = () => {
  const auth = hasAuth();
  const navigate = useNavigate();

  const [myLostPets, setmyLostPets] = useState(null);
  const [editMyPet, setEditMyPet] = useState(null);

  const getMyLostPets = async () => {
    const myPetsResponse = await getMyPets(auth);
    setmyLostPets(myPetsResponse);
  };

  useEffect(() => {
    if (auth) {
      getMyLostPets();
    }
  }, [auth]);

  const handleClickDetelePet = (petId) => {
    console.log(petId.id);
    deletePetReport({ id: petId.id }, auth).then(() => {
      navigate("/");
    });
  };

  return editMyPet ? (
    <PublishLostPetComponent petValueData={editMyPet} />
  ) : myLostPets ? (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Mis mascotas publicadas</TextTitle>
      </div>

      {myLostPets.map((p, i) => (
        <PetCard
          petName={p.petName}
          imageDataURL={p.imageDataURL}
          bio={p.bio}
          buttonName={"Editar"}
          onClick={() => setEditMyPet(p)}
          displayDeleteButton={"block"}
          handleClick={() => handleClickDetelePet(p)}
        ></PetCard>
      ))}
    </div>
  ) : (
    <div className={css.container__text}>
      <TextTitle>No publicaste mascotas</TextTitle>
    </div>
  );
};
