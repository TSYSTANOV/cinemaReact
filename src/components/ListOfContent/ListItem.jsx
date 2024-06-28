import { useVideoPreview } from "../../hooks/useVideoPreview";

function ListItem({ item, type }) {
  const { videoPreview } = useVideoPreview(
    item.media_type || item.content_type || type,
    item.id
  );

  return (
    <li className="other-films__item">
      <a
        className="other-films__link"
        data-rating={item.vote_average.toFixed(1)}
        href={videoPreview ? `https://youtu.be/${videoPreview}` : null}
        target="_blank"
      >
        <img
          className="other-films__img"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
          alt="постер"
        />
      </a>
    </li>
  );
}
export { ListItem };
