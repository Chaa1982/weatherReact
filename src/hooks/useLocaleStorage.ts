import { useState, useEffect } from "react";

export const useLocalStorage = (key: string) => {
  const [localStorageData, setLocalStorageData] = useState(JSON.parse(localStorage.getItem(key) || "null"));
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageData));
  }, [localStorageData, key]);

  return [localStorageData, setLocalStorageData];
};
