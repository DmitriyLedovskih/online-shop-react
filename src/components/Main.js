import React, { useState } from "react";
import Card from "./Card";
import Slider from "./Slider";

function Main({ data, tab, onAddToCart }) {
  const [tabIndex, setTabIndex] = useState(0);
  function onClickTabIndex(index) {
    setTabIndex(index);
  }
  return (
    <>
      <section className="slider slider-main content__section">
        <Slider data={data} onAddToCart={onAddToCart} />
      </section>
      <section className="cards content__section">
        <h2 className="cards__title content__section-title title title_type_gradient">
          Топ 4
        </h2>
        <div className="cards__row">
          {data.map(
            (item) =>
              item.top && (
                <Card item={item} key={item.id} onAddToCart={onAddToCart} />
              )
          )}
        </div>
      </section>
      <section className="cards content__section">
        <ul className="tabs cards__tabs">
          {tab.map((item, i) => (
            <li className="tab" key={item}>
              <button
                className={`tab__button button link ${
                  tabIndex === i ? "tab__button_active" : ""
                }`}
                type="button"
                onClick={() => onClickTabIndex(i)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className="cards__row">
          {data.map(
            (item) =>
              !item.top && (
                <Card item={item} key={item.id} onAddToCart={onAddToCart} />
              )
          )}
        </div>
        <button className="button button_type_outline content__section-button">
          Показать ещё
        </button>
      </section>
      <section className="cards content__section">
        <h2 className="content__section-title title title_type_gradient cards__title">
          Акции и скидки
        </h2>
        <div className="cards__row">
          {data.map(
            (item) =>
              !item.top && (
                <Card item={item} key={item.id} onAddToCart={onAddToCart} />
              )
          )}
        </div>
      </section>
    </>
  );
}

export default Main;
