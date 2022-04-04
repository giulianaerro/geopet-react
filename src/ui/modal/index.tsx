import React, { useState } from "react";
import { TextTitle } from "../texts";
import css from "./index.css";
import { TextArea, TextField } from "../text-field";
import { MainButton } from "../buttons";
import { sendReport } from "../../lib/api";

export const ModalReport = ({ petData, onClick = null }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const info = e.target.info.value;
    const emailUser = petData.emailUser;
    const objectID = petData.objectID;
    const petName = petData.petName;

    sendReport({ name, number, info, emailUser, objectID, petName });
  };

  return (
    <div className={css.root}>
      <div id="modal_container" className={css.modal_container}>
        <div className={css.modal}>
          <TextTitle> Reportar info </TextTitle>
          <form onSubmit={handleSubmit} className={css.report_pet}>
            <TextField type={"text"} name={"name"} label={"TU NOMBRE"} />
            <TextField type={"text"} name={"number"} label={"TU TÉLEFONO"} />
            <TextArea name={"info"} label={"DONDE LO VISTE?"} />
            <MainButton>Enviar reporte</MainButton>
          </form>
          <MainButton onClick={onClick}>Cerrar</MainButton>
        </div>
      </div>
    </div>
  );
};
