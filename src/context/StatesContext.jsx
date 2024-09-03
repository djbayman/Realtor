import { createContext, useState } from "react";

export const StateContext = createContext();

const StatesProvider = ({ children }) => {
  const [stateProps, setStateProps] = useState({
    purpose: "for-rent",
    priceMin: "",
    priceMax: "",
    roomsMax: "",
    bathsMax: "",
  });

  const [data, setData] = useState([]);

  const value = {
    stateProps,
    setStateProps,
    data,
    setData,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StatesProvider;
