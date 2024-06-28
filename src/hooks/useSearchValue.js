import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "../server/api";

export const useSearchValue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { search } = Object.fromEntries(searchParams);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { results } = await getSearch(search);
      if (results.length) {
        const arr = results.filter((item) => item.media_type !== "person");
        setData(arr);
      } else {
        setData([]);
      }
      setLoading(false);
    })();
  }, [search]);

  return { data, search, loading };
};
