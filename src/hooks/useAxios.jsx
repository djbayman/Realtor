import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://bayut.p.rapidapi.com";

const useAxios = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const result = await axios.get(url, {
        headers: {
          "X-RapidAPI-Key":
            "909ce48e25mshc893eb9cd44e5a4p17a611jsnaeadd2eefda1",
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
