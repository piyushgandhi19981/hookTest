import { useState, useEffect } from "react";

async function fetchDataAction(searchText, abortController) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`,
      {
        signal: abortController.signal,
      }
    );
    const data = await res.json();
    return data?.products || [];
  } catch (error) {
    console.log(error, "error");
    return [];
  }
}

export const useDataFlowHook = (searchText) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(async () => {
      const data = await fetchDataAction(searchText, abortController);
      setData(data);
    }, 200);

    return () => {
      abortController.abort();
    };
  }, [searchText]);

  return {
    data,
  };
};
