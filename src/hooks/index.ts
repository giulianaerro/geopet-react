import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authUser, userDataAtom, userFullnameAtom } from "./atoms";

export function useTokenState(token: string) {
  const setTokenState = useSetRecoilState(authUser);
  useEffect(() => {
    setTokenState(token);
  }, [token]);
}

export function hasAuth() {
  return useRecoilValue(authUser);
}

export function useUserData(email) {
  const setUserDataState = useSetRecoilState(userDataAtom);
  useEffect(() => {
    setUserDataState(email);
  }, [email]);
}

export function userData() {
  return useRecoilValue(userDataAtom);
}

export function useFullname(fullname) {
  const setFullname = useSetRecoilState(userFullnameAtom);
  useEffect(() => {
    setFullname(fullname);
  }, [fullname]);
}

export function fullnameData() {
  return useRecoilValue(userFullnameAtom);
}
