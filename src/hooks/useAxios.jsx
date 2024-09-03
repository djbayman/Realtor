import { useCallback, useContext, useState } from "react";
import axios from "axios";
import { StateContext } from "../context/StatesContext";

axios.defaults.baseURL = "https://bayut.p.rapidapi.com";

const useAxios = () => {
  const { setData } = useContext(StateContext);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(
    async (url) => {
      try {
        setIsLoading(true);
        await axios
          .get(url, {
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_REALTOR_KEY,
              "X-RapidAPI-Host": "bayut.p.rapidapi.com",
            },
          })
          .then((res) => {
            setData(res?.data.hits);
          });
      } catch (err) {
        throw Error("there is an error reload the page");
      } finally {
        setIsLoading(false);
      }
    },
    [setData]
  );

  return {
    fetchData: (url) => fetchData(url),
    isLoading,
  };
};

export default useAxios;
