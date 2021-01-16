import React, { createContext, useContext, useReducer } from "react";

//prepare the datalayer
export const StateContext = createContext();
//wrap our app and provide the datalayer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
//pull information from datalayer
export const useStateValue = () => useContext(StateContext);

export default StateProvider;
