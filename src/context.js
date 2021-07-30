import React, { useState } from "react";
import { useContext } from "react";
const AppContext = React.createContext();
export const AppProvider = ({ Children }) => {
  return (
    <AppContext.Provider>
      <div>{Children}</div>
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
