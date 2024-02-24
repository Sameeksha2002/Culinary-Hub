import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log("url inside usefetch() hook ", url);

    async function fetchMeals() {
      axios.get(url).then((response) => {
        const data = response.data;
        if (Object.values(data).some((value) => value !== null)) {
          setData(data);
          console.log("responded data", data);
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

    //INVOLKING ONLY WHEN THE URL HAS SOME VALUE
    if (url) {
      console.log("calling fetch function");
      fetchMeals();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, hasError };
};

export default useFetch;
