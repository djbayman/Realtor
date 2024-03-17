import { useState } from "react";
import axios from "axios";
// import { StateContext } from "../context/StatesContext";

axios.defaults.baseURL = "https://bayut.p.rapidapi.com";

const useAxios = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const result = await axios.get(url, {
        headers: {
          "X-RapidAPI-Key":
            "1d9fad6153msh12a0e00c9afe25ep18f86ejsn8977aef96565",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      });
      return result.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchData: (url) => fetchData(url),
    loading,
  };
};

export default useAxios;
