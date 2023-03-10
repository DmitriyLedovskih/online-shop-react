import React from "react";
import vkLogo from "../assets/images/vk-logo.svg";
import discordLogo from "../assets/images/discord-logo.svg";
import mirLogo from "../assets/images/Mir-logo.svg";
import masterCardLogo from "../assets/images/masterCard-logo.svg";
import visaLogo from "../assets/images/visa-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row footer__brand">
          <ul className="footer__brand-list">
            <li className="footer__brand-item">
              <a href="#" className="footer__brand-link">
                <img
                  src={masterCardLogo}
                  alt="Логотип Мастер Кард"
                  className="footer__brand-logo icon"
                />
              </a>
            </li>
            <li className="footer__brand-item">
              <a href="#" className="footer__brand-link">
                <img
                  src={mirLogo}
                  alt="Логотип Мир"
                  className="footer__brand-logo icon"
                />
              </a>
            </li>
            <li className="footer__brand-item">
              <a href="#" className="footer__brand-link">
                <img
                  src={visaLogo}
                  alt="Логотип Виза"
                  className="footer__brand-logo icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__row">
          <nav className="footer__col">
            <span className="footer__col-title">О компании</span>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link link">
                  О нас
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link link">
                  Вакансии
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link link">
                  Реквизиты
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer__col">
            <span className="footer__col-title">Договор оферты</span>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link link">
                  Правовая информация
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link link">
                  Политика кондефициальность
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link link">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__row">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__social">
            <li className="footer__social-item">
              <a href="#" className="footer__social-link link">
                <img
                  src={vkLogo}
                  alt="Иконка ВК"
                  className="footer__social-icon icon"
                />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" className="footer__social-link link">
                <img
                  src={discordLogo}
                  alt="Иконка Дискорда"
                  className="footer__social-icon icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
