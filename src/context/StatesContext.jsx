import { createContext, useCallback, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

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
  const [filteredData, setFilteredData] = useState([]);
  const { fetchData } = useAxios();

  const fetchDataMemoized = useCallback(() => {
    fetchData(
      `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002,6020&purpose=${stateProps.purpose}&priceMin=${stateProps.priceMin}&priceMax=${stateProps.priceMax}&roomsMax=${stateProps.roomsMax}&bathsMax=${stateProps.bathsMax}`
    ).then((result) => {
      setData(result?.hits);
    });
    console.log(stateProps);
  }, [stateProps]);

  useEffect(() => {
    fetchDataMemoized();
  }, [fetchDataMemoized]);

  const value = {
    stateProps,
    setStateProps,
    data,
    setData,
    filteredData,
    setFilteredData,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StatesProvider;
