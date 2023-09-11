import {useState, useEffect} from "react";
import { WeatherDataInterface } from "../types";

export const useLocalStorage = (key: string) => {
    const[localStorageData, setLocalStorageData] = useState<WeatherDataInterface | string>(
        JSON.parse(localStorage.getItem(key) || "null"));
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localStorageData));
    }, [localStorageData, key]);

    return [localStorageData, setLocalStorageData];
}