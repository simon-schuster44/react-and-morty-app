import { useState, useEffect } from "react";

export default function useFetch(urlToFetch, arrayProp) {
  const [state, setState] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      if (arrayProp) {
        setState(data[arrayProp]);
      } else {
        setState(data);
      }
    }
    fetchData();
  }, [urlToFetch, arrayProp]);
  return [state, setState];
}
