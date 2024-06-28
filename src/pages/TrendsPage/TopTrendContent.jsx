import { useEffect, useState } from "react";
import { getVideoPrevies } from "../../server/api";
import { useVideoPreview } from "../../hooks/useVideoPreview";

function TopTrendContent({ topTrend }) {
  const { videoPreview } = useVideoPreview(
    topTrend.media_type || topTrend.content_type,
    topTrend.id
  );

  return (
    <section className="film-week">
      <div
        className="container film-week__container"
        data-rating={topTrend.vote_average.toFixed(1)}
      >
        <div className="film-week__poster-wrapper">
          <img
            className="film-week__poster"
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${topTrend.backdrop_path}`}
            alt={topTrend.title}
          />
          <p className="film-week__title_origin">
            {topTrend.original_title || topTrend.original_name}
          </p>
        </div>
        <h2 className="film-week__title">{topTrend.title || topTrend.name}</h2>
        <a
          className="film-week__watch-trailer tube"
          target="_blank"
          href={`https://youtu.be/${videoPreview}`}
          aria-label="смотреть трейлер"
        ></a>
      </div>
    </section>
  );
}
export { TopTrendContent };
