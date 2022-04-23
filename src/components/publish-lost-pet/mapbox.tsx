import React, { useRef, useEffect, useState } from "react";
import ReactMapbox from "react-mapbox-gl";
import { useSetMapboxAtom } from "../../hooks";
import { Button } from "../../ui/buttons";
import css from "./mapbox.css";

const Map = ReactMapbox({
  accessToken:
    "pk.eyJ1IjoiZ2l1bGllcnJvIiwiYSI6ImNrd2IyNjdvZDAwYmwydnAzNjhkNTRwdncifQ.gNKIEIEGRLoOt1JLlyF8HQ",
});

export function MapboxSeach() {
  const setDataMap = useSetMapboxAtom();
  const [query, setQuery] = useState("");

  const initialCoords: any = [-64.183, -31.417];
  const [coords, setCoords] = useState(initialCoords);

  async function search() {
    const data = await fetch(
      `https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=${query}&format=json`
    ).then((r) => r.json());

    setCoords([data[0].lon, data[0].lat]);
    setDataMap({
      mapLat: parseFloat(data[0].lat),
      mapLng: parseFloat(data[0].lon),
      mapUbication: data[0].display_name,
    });
  }

  function inputChangeHandler(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={css.container__mapbox}>
      <Map
        className={css.map}
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: "250px",
          width: "370px",
          marginBottom: 23,
        }}
        zoom={[10]}
        center={coords}
      ></Map>

      <div className={css.container__input}>
        <input
          className={css.input}
          type="text"
          onChange={inputChangeHandler}
          value={query}
        />
      </div>
      <Button
        bgColor={"var(--azul)"}
        borderOption={"5px solid var(--azul-marino)"}
        fontSize={14}
        onClick={search}
      >
        Buscar
      </Button>
    </div>
  );
}
