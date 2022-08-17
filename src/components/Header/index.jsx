import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>Главная</li>
        <li>Обо мне</li>
        <li>Услуги</li>
        <li>Отзывы</li>
        <li>Вопросы</li>
      </ul>
    </div>
  );
};

export default Header;
