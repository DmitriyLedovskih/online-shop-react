import React, { useState } from "react";

function Tabs({ tab, className }) {
  const [tabIndex, setTabIndex] = useState(0);
  function onClickTabIndex(index) {
    setTabIndex(index);
  }
  return (
    <ul className={`tabs ${className}`}>
      {tab.map((item, i) => (
        <li className="tab" key={i}>
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
  );
}

export default Tabs;
