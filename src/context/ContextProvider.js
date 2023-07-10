import React, { useState, createContext, useEffect } from 'react';
export const Context = createContext();

export default function ContextProvider({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
