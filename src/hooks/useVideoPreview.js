import { useEffect, useState } from "react";
import { getVideoPrevies } from "../server/api";

export const useVideoPreview = (type, id) => {
  const [videoPreview, setVideoPreview] = useState(null);
  useEffect(() => {
    if (id) {
      (async () => {
        const { results } = await getVideoPrevies(type, id);

        if (results.length > 0) {
          setVideoPreview(results[0].key);
        }
      })();
    }
  }, [id]);
  return { videoPreview };
};
