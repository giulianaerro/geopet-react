import React, { useEffect, useState } from "react";
import { Button } from "../../ui/buttons";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";
import { getPetsAroundMe } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export const HomeComponent = () => {
  const [pets, setPets] = useState(null);
  const [geoloc, setGeoloc] = useState(null);
  const navigate = useNavigate();

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(async (res) => {
      const { latitude, longitude } = res.coords;
      setGeoloc({ userLat: latitude, userLng: longitude });
    });
  };
  const getPets = async () => {
    const petsAroundResponse = getPetsAroundMe(geoloc);
    setPets(petsAroundResponse);
  };

  useEffect(() => {
    if (geoloc) {
      getPets();
    }
  }, [geoloc]);

  return pets ? (
    <TextTitle>Mascotas perdidas cerca tuyo</TextTitle>
  ) : (
    <div>
      <div className={css.content}>
        <div className={css.container__text_title}>
          <TextTitle>
            Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
            conocer tu ubicación.
          </TextTitle>
        </div>
        <Button fontSize={24} onClick={getPosition}>
          Dar mi ubicación
        </Button>
      </div>
    </div>
  );
};
