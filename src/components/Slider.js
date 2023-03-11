import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Slider({ data, onAddToCart, getItem }) {
  const [slide, setSlide] = useState(0);
  const [indexSlide, setIndexSlide] = useState(0);

  function nextSlide() {
    setSlide(slide + 100);
    setIndexSlide(indexSlide + 1);
  }

  function prevSlide() {
    setSlide(slide - 100);
    setIndexSlide(indexSlide - 1);
  }
  return (
    <>
      <button
        className="slider__button slider__button_type_left button"
        type="button"
        onClick={prevSlide}
        disabled={slide === 0}
      >
        <FiChevronLeft className="icon icon_color_light" />
      </button>
      <div
        className="slider__container"
        style={{ transform: `translateX(-${slide}%)` }}
      >
        {data.map((item) => (
          <div
            className={`slider__slide slider-main__slide`}
            style={{ backgroundImage: `url(${item.image})` }}
            key={item.id}
          >
            <div className="slider__slide-content">
              <h2 className="slider__slide-title">
                <Link
                  to={`/game/${item.title}`}
                  className="link slider__slide-link"
                  onClick={() => getItem(item)}
                >
                  {item.title}
                </Link>
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
                <button
                  className="slider__slide-button button button_type_light button-main"
                  onClick={() => onAddToCart(item)}
                >
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
        onClick={nextSlide}
        // Пока использовал вот такой костыль
        disabled={slide === 500}
      >
        <FiChevronRight className="icon icon_color_light" />
      </button>
      <div className="slider__pagination">
        {data.map((item, index) => (
          <button
            className={`slider__pagination-button button ${
              index === indexSlide ? "slider__pagination-button_active" : ""
            }`}
            type="button"
            onClick={nextSlide}
            key={index}
          ></button>
        ))}
      </div>
    </>
  );
}

export default Slider;
