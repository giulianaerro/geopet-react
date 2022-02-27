import React from "react";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";

export function Init() {
  return (
    <div>
      <div>
        <MainButton>Hola</MainButton>
      </div>
      <div style={{ margin: 25 }}></div>

      <div>
        <MainButton borderOption={"5px solid #6BBF79"} bgColor={"blue"}>
          gjjfgipdfspo
        </MainButton>
      </div>
      <div>
        <TextField
          label={"ikd"}
          type={"password"}
          name={"textField"}
        ></TextField>
      </div>
    </div>
  );
}
