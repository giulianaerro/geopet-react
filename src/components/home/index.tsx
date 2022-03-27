import React, { useEffect, useState } from "react";
import { Button } from "../../ui/buttons";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";
import { petsAround } from "../../lib/api";
import { PetsAround } from "./pets-around";

export const HomeComponent = () => {
  const [petsAroundLocation, setPetsAroundLocation] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      const { latitude, longitude } = res.coords;
      setGeoLocation({ userLat: latitude, userLng: longitude });
    });
  };

  const getPets = async () => {
    const petsAroundResponse = await (await petsAround(geoLocation)).json();
    setPetsAroundLocation(petsAroundResponse);
  };

  useEffect(() => {
    if (geoLocation) {
      getPets();
    }
  }, [geoLocation]);

  return geoLocation ? (
    <PetsAround petsAround={petsAroundLocation} />
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
