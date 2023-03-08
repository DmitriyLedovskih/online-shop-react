import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchForm() {
  return (
    <form className="search-form" name="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Поиск..."
        name="search-input"
      />
      <button type="submit" className="search-form__button button">
        <FiSearch className="search-form__button-icon icon icon_color_light" />
      </button>
    </form>
  );
}

export default SearchForm;
