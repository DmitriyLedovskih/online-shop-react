import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Slider({ data }) {
  return (
    <>
      <button
        className="slider__button slider__button_type_left button"
        type="button"
      >
        <FiChevronLeft className="icon icon_color_light" />
      </button>
      <div className="slider__container">
        {data.map((item) => (
          <div
            className="slider__slide slider-main__slide"
            style={{ "background-image": `url(${item.image})` }}
          >
            <div className="slider__slide-content">
              <h2 className="slider__slide-title">
                <a href="#" className="link slider__slide-link">
                  {item.title}
                </a>
              </h2>
              <p className="slider__slide-subtitle">{item.descr}</p>
              <div className="slider__slide-prices prices">
                <span className="prices__price">{item.price} ₽</span>
                {item.discount && (
                  <>
                    <span className="prices__discount">-{item.discount}%</span>
                    <span className="prices__oldPrice">{item.oldPrice} ₽</span>
                  </>
                )}
              </div>
              <div className="slider__slide-buttons">
                <button className="slider__slide-button button button_type_light button-main">
                  В корзину
                </button>
                <button className="slider__slide-button button button_type_opacity button-main">
                  В избранное
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="slider__button slider__button_type_right button"
        type="button"
      >
        <FiChevronRight className="icon icon_color_light" />
      </button>
      <div className="slider__pagination">
        {data.map(() => (
          <button
            className="slider__pagination-button button"
            type="button"
          ></button>
        ))}
      </div>
    </>
  );
}

export default Slider;
