import { useEffect, useState } from "react";
import { PaginationLayout } from "../components/Pagination/PaginationLayout";
import { Loader } from "../components/Loader/Loader";

import { useCurrentLocation } from "../hooks/useCurrentLocation";

export const withApi = (Component, func) => {
  return (props) => {
    const { type, typeOfContent, page, setPage } = useCurrentLocation();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const [totalPage, setTotalPages] = useState(null);
    useEffect(() => {
      (async () => {
        setLoading(true);
        let res;
        if (type) {
          res = await func(type, typeOfContent, page || 1);
        } else {
          res = await func(page || 1);
        }

        if (res) {
          setData(res.results);
          setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
        } else {
          setError("Some Error");
        }
        setLoading(false);
      })();
    }, [page, type, typeOfContent]);

    return (
      <>
        {error ? (
          <h2>{error}</h2>
        ) : loading ? (
          <Loader />
        ) : (
          <>
            <Component
              {...props}
              data={data}
              page={+page}
              typeOfContent={typeOfContent}
              type={type}
              title={!type ? "Trends" : ""}
            />
          </>
        )}
        <PaginationLayout setPage={setPage} totalPage={totalPage} />
      </>
    );
  };
};
