import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { json } from "stream/consumers";
import { atom, useRecoilValue, selector, useRecoilState } from "recoil";

const queryState = atom({
  key: "query",
  default: "",
});

const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    if (valorDeQuery) {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
      );
      const json = await response.json();
      return json.results;
    } else {
      return [];
    }
  },
});

export function useSearchResult() {
  const params = useParams();
  const query = params.query;
  const [value, setQueryValue] = useRecoilState(queryState);
  const results = useRecoilValue(resultsState);

  useEffect(() => {
    setQueryValue(query);
  }, [query]);
  return results;
}
