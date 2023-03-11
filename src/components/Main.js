import React, { useState } from "react";
import Card from "./Card";
import Slider from "./Slider";
import Tabs from "./Tabs";

function Main({ data, tab, onAddToCart, getItem }) {
  return (
    <>
      <section className="slider slider-main content__section">
        <Slider data={data} onAddToCart={onAddToCart} getItem={getItem} />
      </section>
      <section className="cards content__section">
        <h2 className="cards__title content__section-title title title_type_gradient">
          Топ 4
        </h2>
        <div className="cards__row">
          {data.map(
            (item) =>
              item.top && (
                <Card
                  item={item}
                  key={item.id}
                  onAddToCart={onAddToCart}
                  getItem={getItem}
                />
              )
          )}
        </div>
      </section>
      <section className="cards content__section">
        <Tabs tab={tab} className="cards__tabs" />
        <div className="cards__row">
          {data.map(
            (item) =>
              !item.top && (
                <Card
                  item={item}
                  key={item.id}
                  onAddToCart={onAddToCart}
                  getItem={getItem}
                />
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
                <Card
                  item={item}
                  key={item.id}
                  onAddToCart={onAddToCart}
                  getItem={getItem}
                />
              )
          )}
        </div>
      </section>
    </>
  );
}

export default Main;
