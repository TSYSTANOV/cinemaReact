import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalContextApp";

function Navigation() {
  const { openModal, setOpenModal } = useModal();
  const handleClick = (e) => {
    if (e.target.tagName === "A") {
      setOpenModal(false);
    }
  };
  return (
    <nav className={`navigation ${openModal ? "navigation_active" : ""}`}>
      <ul className="navigation__list get-nav" onClick={handleClick}>
        <li className="navigation__item">
          <Link
            to={"/"}
            href="#"
            className="navigation__link get-nav__link get-nav__link_triends"
          >
            В тренде
          </Link>
        </li>

        <li className="navigation__item">
          <Link
            to={"popular-movie"}
            href="#"
            className="navigation__link get-nav__link get-nav__link_popular-movies"
          >
            Популярные Фильмы
          </Link>
        </li>

        <li className="navigation__item">
          <Link
            to={"popular-tv"}
            href="#"
            className="navigation__link get-nav__link get-nav__link_popular-tv"
          >
            Популярные сериалы
          </Link>
        </li>

        <li className="navigation__item">
          <Link
            to={"top_rated-movie"}
            href="#"
            className="navigation__link get-nav__link get-nav__link_top-movies"
          >
            Top Фильмов
          </Link>
        </li>

        <li className="navigation__item">
          <Link
            to={"top_rated-tv"}
            href="#"
            className="navigation__link get-nav__link get-nav__link_top-tv"
          >
            Top Сериалы
          </Link>
        </li>
      </ul>
      <button className="navigation__close" onClick={() => setOpenModal(false)}>
        <svg
          className="navigation__close-cross"
          height="30"
          viewBox="0 0 365.696 365.696"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"></path>
        </svg>
      </button>
    </nav>
  );
}
export { Navigation };
