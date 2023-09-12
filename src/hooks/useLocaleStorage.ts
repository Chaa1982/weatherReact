import { useState, useEffect} from "react";
import { MainContextInterface} from "../types";

export const useLocalStorage = (key: string) => {
  const [localStorageData, setLocalStorageData] = useState<MainContextInterface>(JSON.parse(localStorage.getItem(key) || "null"));
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageData));
  }, [localStorageData, key]);

  return [localStorageData, setLocalStorageData];
};
