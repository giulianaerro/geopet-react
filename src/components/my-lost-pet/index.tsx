import React, { useEffect, useState } from "react";
import { hasAuth } from "../../hooks";
import { getMyPets } from "../../lib/api";
import { PetCard } from "../../ui/pet-card";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";

export const MyLostPetComponent = () => {
  const auth = hasAuth();

  const [myLostPets, setmyLostPets] = useState(null);

  const getMyLostPets = async () => {
    const myPetsResponse = await getMyPets(auth);
    setmyLostPets(myPetsResponse);
  };

  useEffect(() => {
    if (auth) {
      getMyLostPets();
    }
  }, [auth]);

  return myLostPets ? (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Mis mascotas publicadas</TextTitle>

        {myLostPets.map((p) => (
          <PetCard
            petName={p.petName}
            objectID={p.objectId}
            imageDataURL={p.imageDataURL}
            bio={p.bio}
            buttonName={"editar"}
          ></PetCard>
        ))}
      </div>
    </div>
  ) : (
    <div className={css.container__text}>
      <TextTitle>No publicaste mascotas</TextTitle>
    </div>
  );
};
