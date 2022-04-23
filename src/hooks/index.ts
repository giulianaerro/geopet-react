import { useEffect } from "react";
import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
  RecoilState,
  atom,
} from "recoil";
import { authUser, userDataAtom, userFullnameAtom } from "./atoms";

export function useTokenState(token) {
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

export const useMapboxAtom = () => useRecoilState(mapboxAtom);
export const useMapboxAtomValue = () => useRecoilValue(mapboxAtom);
export const useSetMapboxAtom = () => useSetRecoilState(mapboxAtom);
const mapboxAtom: RecoilState<{ [key: string]: any }> = atom({
  key: "mapbox",
  default: {
    mapLat: null,
    mapLng: null,
    mapUbication: null,
  },
});
