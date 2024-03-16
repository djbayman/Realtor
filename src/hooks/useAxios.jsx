import { useState } from "react";
import axios from "axios";
// import { StateContext } from "../context/StatesContext";

axios.defaults.baseURL = "https://bayut.p.rapidapi.com";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

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
      // console.log(result.data);
      // setResponse(result.data);
      return result.data;

      // setApiResponse(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return {
    fetchData: (url) => fetchData(url),
    response,
    loading,
  };
};

export default useAxios;
