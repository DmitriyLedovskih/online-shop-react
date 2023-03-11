import React from "react";
import { FiHeart } from "react-icons/fi";
import Card from "./Card";
import Slider from "./Slider";
import Tabs from "./Tabs";

function Games({ card, cards, onAddToCart, getItem }) {
  const tabName = ["Описание товара", "Системные требования", "Активация"];
  return (
    <section className="game content__section">
      <div
        className="game__bg"
        style={{ backgroundImage: `url(${card.image})` }}
      ></div>
      <div className="game__header">
        <img src={card.image} alt={card.title} className="game__image" />
        <div className="game__content">
          <h1 className="title title_type_gradient game__content-title">
            {card.title}
          </h1>
          <div className="prices">
            <span className="prices__price">{card.price} ₽</span>
            {card.discount && (
              <>
                <span className="prices__discount">-{card.discount}%</span>
                <span className="prices__oldPrice">{card.oldPrice} ₽</span>
              </>
            )}
          </div>
          <div className="game__buttons">
            <button
              className="game__button-add button button_type_primary"
              type="button"
              onClick={() => onAddToCart(card)}
            >
              В корзину
            </button>
            <button
              className="game__button-favorite button button_type_light"
              type="button"
            >
              <FiHeart className="icon" />
            </button>
          </div>
          <ul className="game__list">
            <li className="game__list-item">
              <span className="game__list-title">Жанр:</span>
              <span className="game__list-text">Гонки</span>
            </li>
            <li className="game__list-item">
              <span className="game__list-title">Платформа:</span>
              <span className="game__list-text">{card.platform}</span>
            </li>
            <li className="game__list-item">
              <span className="game__list-title">Тип:</span>
              <span className="game__list-text">Ключ</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="game__content">
        <div className="game__content-block">
          <Tabs tab={tabName} className="game__content-tabs" />
          <h2 className="game__content-title title title_type_gradient">
            Описание товара:
          </h2>
          <p className="game__content-descr">{card.descr}</p>
        </div>
      </div>
      <div className="game__similar">
        <h2 className="game__similar-title title title_type_gradient">
          Похожие игры:
        </h2>
        <div className="cards__row">
          {cards.map(
            (item) =>
              card.category === item.category &&
              card.id !== item.id && (
                <Card
                  item={item}
                  onAddToCart={onAddToCart}
                  getItem={getItem}
                  key={item.id}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default Games;
