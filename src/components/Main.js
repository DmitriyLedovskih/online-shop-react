import React from "react";
import Card from "./Card";
import Slider from "./Slider";

function Main({ data, tab }) {
  return (
    <main className="content">
      <div className="container">
        <section className="slider slider-main content__section">
          <Slider data={data} />
        </section>
        <section className="cards content__section">
          <h2 className="cards__title content__section-title title title_type_gradient">
            Топ 4
          </h2>
          <div className="cards__row">
            {data.map((item) => item.top && <Card item={item} key={item.id} />)}
          </div>
        </section>
        <section className="cards content__section">
          <ul className="tabs cards__tabs">
            {tab.map((item) => (
              <li className="tab" key={item}>
                <button className="tab__button button link" type="button">
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="cards__row">
            {data.map(
              (item) => !item.top && <Card item={item} key={item.id} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
