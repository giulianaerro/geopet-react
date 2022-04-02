import React, { useState } from "react";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { TextTitle } from "../../ui/texts";
import css from "./index.css";
import { userData, hasAuth, useFullname, fullnameData } from "../../hooks";
import { editMyInfo, signUp } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export const SignUpComponent = () => {
  const auth = hasAuth();
  const data = userData();
  const fullnameDataDefault = fullnameData();
  const [fullNameData, setFullNameData] = useState("");
  useFullname(fullNameData);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (auth == "") {
      e.preventDefault();

      const fullName = e.target.name.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;

      if (password === confirmPassword) {
        setFullNameData(fullName);
        signUp(data, fullName, password);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        window.alert("Las contraseñas no coinciden");
      }
    } else {
      e.preventDefault();
      const fullName = e.target.name.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      if (password == confirmPassword) {
        editMyInfo(fullName, password, auth);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        window.alert("Las contraseñas no coinciden");
      }
    }
  };

  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Mis datos</TextTitle>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container__text_field}>
          <TextField
            type={"name"}
            name={"name"}
            label={"NOMBRE"}
            defaultValue={fullnameDataDefault}
          ></TextField>
        </div>

        <div className={css.container__text_field_password}>
          <TextField
            type={"password"}
            name={"password"}
            label={"CONTRASEÑA"}
          ></TextField>
        </div>
        <div className={css.container__text_field}>
          <TextField
            type={"password"}
            name={"confirmPassword"}
            label={"REPETIR CONTRASEÑA"}
          ></TextField>
        </div>
        <MainButton>Guardar</MainButton>
      </form>
    </div>
  );
};
