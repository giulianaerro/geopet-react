import React from "react";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../lib/api";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { TextTitle } from "../../ui/texts";
import { useTokenState } from "../../hooks";
import css from "./index.css";

export const SignInComponent = ({ userEmail }) => {
  const navigate = useNavigate();

  const [token, setToken] = React.useState("");
  useTokenState(token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const resAuthUser = await await signIn(userEmail, password);

    if (!resAuthUser) {
      window.alert("contraseña incorrecta");
    } else {
      setToken(resAuthUser);
      navigate("/");
    }
  };

  return (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Ingresar</TextTitle>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container__text_field}>
          <TextField
            type={"password"}
            name={"password"}
            label={"CONTRASEÑA"}
          ></TextField>
        </div>
        <MainButton>Siguiente</MainButton>
      </form>
    </div>
  );
};
