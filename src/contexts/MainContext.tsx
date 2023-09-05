import React, { createContext, useState, PropsWithChildren } from "react";

export const MainContext = createContext<any | null>(null);

interface PropsInterface extends PropsWithChildren {
    a?: number;
}

export const MainContextProvider = ({a, children}: PropsInterface) => {
  return <div>MainContext</div>;
};
