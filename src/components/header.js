import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                <a href="#" className="header__menu-link link">
                  Отзывы
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link link">
                  Гарантии
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link link">
                  Как купить
                </a>
              </li>
            </ul>
          </nav>
          <button type="button" className="header__profile button">
            <span className="header__profile-name">Имя</span>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_213796.png"
              alt=""
              className="header__profile-avatar"
            />
          </button>
        </div>
        <div className="header__row">
          <a href="#" className="logo link">
            Логотип
          </a>
          <SearchForm />
          <ul className="header__icons">
            <li className="header__icon">
              <button className="header__icon-button button">
                <FiHeart className="header__icon-icon icon icon_color_light" />
                <span className="header__icon-counter">0</span>
              </button>
            </li>
            <li className="header__icon">
              <button className="header__icon-button button">
                <FiShoppingCart className="header__icon-button icon icon_color_primary" />
                <span className="header__icon-counter">0</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
