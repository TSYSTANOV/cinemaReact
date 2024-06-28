import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const useCurrentLocation = () => {
  const [seacrhParams, setSeacrhParams] = useSearchParams();
  const { page } = Object.fromEntries(seacrhParams);
  useEffect(() => {
    if (!page) {
      setSeacrhParams({ page: 1 });
    }
  }, [page]);
  const setPage = (pageNumber) => {
    setSeacrhParams((prev) => {
      return { ...prev, page: pageNumber };
    });
  };
  const currentLocation = useLocation();
  const type = useRef();
  const typeOfContent = useRef();
  const active = currentLocation.pathname.slice(1)
    ? currentLocation.pathname.slice(1).split("-")
    : null;
  type.current = active ? active[0] : null;
  typeOfContent.current = active ? active[1] : null;

  return {
    type: type.current,
    typeOfContent: typeOfContent.current,
    page,
    setPage,
  };
};
