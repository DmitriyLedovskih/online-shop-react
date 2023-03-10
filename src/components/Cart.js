import React, { useState } from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

function Cart({ data, onDeleteItem }) {
  const [counter, setCounter] = useState(1);
  function incrementCounter() {
    setCounter(counter + 1);
  }

  function dicrementCounter() {
    setCounter(counter - 1);
  }
  return (
    <section className="content__section cart">
      <h1 className="content__section-title cart__title">
        {data.length > 0 ? (
          <>
            Корзина
            <span className="cart__title-counter">{data.length}</span>
          </>
        ) : (
          <>Корзина пуста :(</>
        )}
      </h1>
      <div className="cart__blocks">
        {data.map((item) => (
          <article className="cart__block" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="cart__block-image"
            />
            <div className="cart__block-content">
              <h2 className="cart__block-title title title_type_gradient">
                {item.title}
              </h2>
              <div className="prices">
                <span className="prices__price">{item.price} ₽</span>
                {item.discount && (
                  <>
                    <span className="prices__discount">-{item.discount}%</span>
                    <span className="prices__oldPrice">{item.oldPrice} ₽</span>
                  </>
                )}
              </div>
              <ul className="cart__block-list">
                <li className="cart__block-item">
                  <span className="cart__block-label">Сервис активации:</span>
                  <span className="cart__block-text">{item.platform}</span>
                </li>
              </ul>
            </div>
            <div className="cart__panel">
              <button
                className="cart__delete-button button button_type_primary"
                type="button"
                onClick={() => onDeleteItem(item.id)}
              >
                <FiX />
              </button>
              <div className="cart__counter">
                <button
                  className="cart__counter-button button button_type_light"
                  type="button"
                  onClick={dicrementCounter}
                >
                  <FiMinus />
                </button>
                <span className="cart__counter-number">{counter}</span>
                <button
                  className="cart__counter-button button button_type_light"
                  type="button"
                  onClick={incrementCounter}
                >
                  <FiPlus />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cart;
