import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Главная
        </li>
        <li
          onClick={() =>
            window.scrollTo({
              top: 750,
              behavior: "smooth",
            })
          }
        >
          Обо мне
        </li>
        <li
          onClick={() =>
            window.scrollTo({
              top: 1500,
              behavior: "smooth",
            })
          }
        >
          Услуги
        </li>
        <li>Отзывы</li>
        <li>Вопросы</li>
      </ul>
    </div>
  );
};

export default Header;
