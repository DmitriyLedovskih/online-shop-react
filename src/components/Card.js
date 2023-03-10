import React from "react";
import { FiHeart } from "react-icons/fi";

function Card({ item, onAddToCart }) {
  return (
    <article className="card">
      <div
        className="card__preview"
        style={{ "background-image": `url(${item.image})` }}
      >
        <div className="card__header">
          {item.top && (
            <div className="card__panel">
              <span className="card__text">Топ 4</span>
            </div>
          )}
          <button
            className="card__favorite-button button button_type_light"
            type="button"
          >
            <FiHeart className="icon icon_color_primary" />
          </button>
        </div>
        <button
          className="card__buy-button button button_type_primary"
          type="button"
          onClick={() => onAddToCart(item)}
        >
          В корзину
        </button>
      </div>
      <div className="card__content">
        <h2 className="card__content-title">
          <a href="#" className="link card__content-link">
            {item.title}
          </a>
        </h2>
        <div className="card__content-prices prices">
          <span className="prices__price">{item.price} ₽</span>
          {item.discount && (
            <>
              <span className="prices__discount">-{item.discount}%</span>
              <span className="prices__oldPrice">{item.oldPrice} ₽</span>
            </>
          )}
        </div>
        <ul className="card__content-list">
          <li className="card__content-item">Ключ</li>
          <li className="card__content-item">Аккаунт</li>
        </ul>
      </div>
    </article>
  );
}

export default Card;
