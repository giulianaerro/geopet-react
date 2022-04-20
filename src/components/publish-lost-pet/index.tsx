import React, { useEffect, useRef, useState } from "react";
import { TextTitle, TextSubtitle } from "../../ui/texts";
import css from "./index.css";
import { TextField, TextArea } from "../../ui/text-field";
import { useDropzone } from "react-dropzone";
import mapboxgl from "mapbox-gl";

import imgDropzone from "../../assets/imgLogo.png";
import { hasAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { createPetLost } from "../../lib/api";

export const PublishLostPetComponent = () => {
  const auth = hasAuth();
  const navigate = useNavigate();

  const [photo, setPhoto] = useState([] as any);

  const [getRootProps, getInputProps] = dropzoneFileManager();
  const dropImage = photo?.preview ? photo.preview : imgDropzone;

  function dropzoneFileManager(): [any, any] {
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => {
        const img = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (event) => {
          setPhoto(
            Object.assign(img, {
              preview: event.target.result,
            })
          );
        };
        reader.readAsDataURL(acceptedFiles[0]);
      },
    });
    return [getRootProps, getInputProps];
  }

  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Reportar mi mascota perdida</TextTitle>
      </div>
      <div className={css.container__input}>
        <TextField
          type={"name"}
          name={"petName"}
          label={"NOMBRE DE LA MASCOTA"}
        ></TextField>
      </div>
      <div className={css.container__input}>
        <TextArea name={"bio"} label={"BIO"}></TextArea>
      </div>
      <div className={css.container__input}>
        <TextSubtitle>Subi una foto de tu mascota:</TextSubtitle>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <img className={css.dropzone} src={dropImage} />
        </div>
      </div>
      <div className={css.container__title_mapbox}>
        <TextSubtitle>
          Buscá un punto de referencia para reportar a tu mascota. Puede ser una
          dirección, un barrio o una ciudad.
        </TextSubtitle>
      </div>
    </div>
  );
};
