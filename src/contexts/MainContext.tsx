import React, {createContext, useState} from 'react'
import { WeatherDataInterface } from '../types';
import { useLocalStorage } from '../hooks/useLocaleStorage';

export const MainContext = createContext<any | null>(null);

export const MainContextProvider = (props: any) => {
    const[data, setData] = useLocalStorage(props);
  return (
    <MainContext.Provider value={{data: data, setData: setData}}>
        {props.children}
    </MainContext.Provider>
  )
}
