import { useRef, useState } from "react";

export const useSearch = () => {
  const [value, setValue] = useState("");
  const input = useRef();
  return { value, setValue, input };
};
