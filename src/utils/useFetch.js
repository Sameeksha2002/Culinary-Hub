import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log("url inside usefetch() hook ", url);

    async function fetchMeals() {
      await axios.get(url).then((response) => {
        const res = response.data;
        if (Object.values(res).some((value) => value !== null)) {
          setData(res);
          console.log("responded data", res);
          setLoading(false);
          setHasError(false);
        } else {
          setData(null);
          setLoading(false);
          setHasError(true);
          console.log("data not found", loading, hasError);
        }
      });
    }

    //INVOKING ONLY WHEN THE URL HAS SOME VALUE
    if (url) {
      console.log("calling fetch function");
      fetchMeals();
    }

    //cleanup when component unmounts
    return () => {
      setData(null);
      setLoading(true);
      setHasError(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, hasError };
};

export default useFetch;
