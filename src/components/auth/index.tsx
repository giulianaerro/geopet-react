import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../lib/api";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { TextTitle } from "../../ui/texts";
import { SignInComponent } from "./sign-in";
import css from "./index.css";
import { useUserData } from "../../hooks";

export const AuthComponent = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = React.useState("");
  const [useData, setUseData] = React.useState("");

  useUserData(useData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setUseData(email);
    const resAuthUser = await await authUser(email);

    if (resAuthUser) {
      setUserEmail(email);
    } else {
      navigate("/signup");
    }
  };

  return userEmail ? (
    <SignInComponent userEmail={userEmail} />
  ) : (
    <div className={css.root}>
      <div className={css.container__text}>
        <TextTitle>Ingresar</TextTitle>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container__text_field}>
          <TextField type={"email"} name={"email"} label={"EMAIL"}></TextField>
        </div>
        <MainButton>Siguiente</MainButton>
      </form>
    </div>
  );
};
