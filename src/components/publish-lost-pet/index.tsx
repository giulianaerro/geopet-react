import React, { useEffect, useRef, useState } from "react";
import { TextTitle, TextSubtitle } from "../../ui/texts";
import css from "./index.css";
import { TextField, TextArea } from "../../ui/text-field";
import { hasAuth, useMapboxAtomValue, userData } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { MapboxSeach } from "./mapbox";
import { createPetLost, editPetReport } from "../../lib/api";
import { MainButton } from "../../ui/buttons";
import { useDropzone } from "react-dropzone";
import imgDropzone from "../../assets/imgLogo.png";

export const PublishLostPetComponent = ({ petValueData = null }) => {
  const [imgDrop, setImgDrop] = useState(imgDropzone);
  const [getRootProps, getInputProps] = dropzoneImage();
  const [dataMessageConfirm, getDataMessageConfirm] = useState(false);

  const textTitle = petValueData
    ? "Editar mascota perdida"
    : "Reportar mi mascota perdida";

  function dropzoneImage() {
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          setImgDrop(e.target.result);
        };
        reader.readAsDataURL(acceptedFiles[0]);
      },
    });
    return [getRootProps, getInputProps];
  }

  const auth = hasAuth();
  const email = userData();
  const navigate = useNavigate();

  const [petData, setPetData] = useState(null);

  const { mapLat, mapLng, mapUbication } = useMapboxAtomValue();

  useEffect(() => {
    if (mapUbication) {
      setPetData({
        lat: mapLat,
        lng: mapLng,
        ubication: mapUbication,
      });
    }
  }, [mapUbication]);

  function handleSubmit(e) {
    e.preventDefault();
    const petName = e.target.petName.value;
    const imageDataURL = imgDrop;
    const bio = e.target.bio.value;
    const emailUser = email;
    const petLat = petData.lat;
    const petLng = petData.lng;

    const data = {
      petName,
      bio,
      imageDataURL,
      petLat,
      petLng,
      emailUser,
    };
    getDataMessageConfirm(true);

    if (petValueData) {
      editPetReport(petValueData.id, data, auth);
    } else {
      createPetLost(data, auth).then((res) => {
        if (res == true) {
          navigate("/mylostpet");
        } else {
          window.alert("Su mascota no ha podido ser publicada");
        }
      });
    }
  }

  return (
    <div className={css.root}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.container__text}>
          <TextTitle>{textTitle}</TextTitle>
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

        <div className={css.container__dropzone}>
          <TextSubtitle>Subi una foto de tu mascota:</TextSubtitle>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <img className={css.dropzone} src={imgDrop} />
          </div>
        </div>

        <div className={css.container__title_mapbox}>
          <TextSubtitle>
            Buscá un punto de referencia para reportar a tu mascota. Puede ser
            una dirección, un barrio o una ciudad.
          </TextSubtitle>
          <MapboxSeach />
        </div>
        <div className={css.container__button}>
          {dataMessageConfirm ? (
            "Espere mientras publicamos su mascota"
          ) : (
            <MainButton>Guardar</MainButton>
          )}
        </div>
      </form>
    </div>
  );
};
