import { Link, useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContextApp";
import { useSearch } from "../../hooks/useSearch";

function Header() {
  const { openModal, setOpenModal } = useModal();
  const { value, setValue, input } = useSearch();
  const Navigate = useNavigate();
  return (
    <header className="header">
      <div className="container header__container">
        <Link to={"/"}>
          <p className="header__logo">
            <span className="header__logo-primary">TS</span> Cinema
          </p>
        </Link>

        <form
          className="header__search-form"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            if (value) {
              Navigate(`/search?search=${value}`);
              setValue("");
              input.current.blur();
            }
          }}
        >
          <input
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="header__search-input"
            type="search"
            name="search"
            required=""
            placeholder="Поиск"
          />
        </form>

        <button
          className="header__burger-btn"
          aria-label="открыть меню"
          onClick={() => setOpenModal(true)}
        >
          <svg
            className="header__burger-svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.94403 9.8959H34.6564"
              strokeWidth="2.475"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M28.0537 19.8H4.94403"
              strokeWidth="2.475"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.94403 29.7041H21.4509"
              strokeWidth="2.475"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
export { Header };
