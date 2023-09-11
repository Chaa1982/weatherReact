import React, {createContext} from 'react'
import { useLocalStorage } from '../hooks/useLocaleStorage';

export const MainContext = createContext<any | null>(null);

export const MainContextProvider = (props: any) => {
    const[data, setData] = useLocalStorage("London");
  return (
    <MainContext.Provider value={{data: data, setData: setData}}>
        {props.children}
    </MainContext.Provider>
  )
}
