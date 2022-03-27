import { useEffect, useState } from "react";
import {
  atom,
  useRecoilValue,
  selector,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const authUser = atom({
  key: "authUser",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export function useTokenState(token: string) {
  const setTokenState = useSetRecoilState(authUser);
  useEffect(() => {
    setTokenState(token);
  }, [token]);
}

export function hasAuth() {
  return useRecoilValue(authUser);
}
