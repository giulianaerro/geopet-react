import React, { useState } from "react";
import { TextTitle } from "../texts";
import css from "./index.css";
import { TextArea, TextField } from "../text-field";
import { Button, MainButton } from "../buttons";
import { sendReport } from "../../lib/api";

export const ModalReport = ({ onClick = null, petValue = null }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameReporter = e.target.name.value;
    const tel = e.target.number.value;
    const petInfo = e.target.info.value;
    const emailUser = petValue.emailUser;
    const objectID = petValue.objectID;
    const petName = petValue.petName;
    sendReport({ nameReporter, petInfo, tel, emailUser, objectID, petName });
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
            <div className={css.container_button}>
              <Button>Enviar</Button>
            </div>
          </form>
          <div className={css.container_button}>
            <Button
              bgColor={"var(--azul)"}
              borderOption={"5px solid var(--azul-marino)"}
              onClick={onClick}
            >
              Cerrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
