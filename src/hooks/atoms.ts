import { useEffect, useState } from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authUser = atom({
  key: "authUser",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userDataAtom = atom({
  key: "userDataAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userFullnameAtom = atom({
  key: "userFullnameAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
