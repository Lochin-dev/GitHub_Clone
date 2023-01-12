import { useContext} from "react";
import { Context } from "../../context/Context";
import "./style.scss";

const index = () => {
  const { state } = useContext(Context);

  return (
    <div className="dis_nav">
      <div className={state ? "navbar d-block" : "navbar d-none"}>
        <div className="container-header">
          <form
            className="navbar-form"
            action="#"
            onSubmit={(e) => ClickedSubmit(e)}
          >
            <input
              type="text"
              className="navbar-form__input"
              placeholder="Search or jump to..."
              onChange={(e) => {
                setInputValue(e.target.value);
                localStorage.setItem("key", e.target.value);
              }}
            />
            <button type="submit" className="navbar-form-span">
              /
            </button>
          </form>
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Dashboard
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Pull requests
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Issues
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Codespaces
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Marketplace
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Explore
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Sponsors
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                href="#"
                className="navbar-list-item__link navbar-list-item__link--before"
              >
                Settings
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                href="#"
                className="navbar-list-item-link navbar-list-item-link--flex"
              >
                <img
                  className="navbar-list-item-link__img"
                />
                <h5 className="navbar-list-item-link__title">
                </h5>
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                className="navbar-list-item-link navbar-list-item-link--contact"
                href="#"
              >
                <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
                <h5 className="navbar-list-item-link__title m-0">Sign Out</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default index;
