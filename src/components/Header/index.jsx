import React from "react";
import "./Header.scss";

const Header = ({
  mainRef,
  aboutRef,
  servicesRef,
  reviewsRef,
  questionsRef,
}) => {
  const scrollHandle = (obj) => {
    window.scrollTo({
      top: obj.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <ul>
        <li onClick={() => scrollHandle(mainRef)}>Главная</li>
        <li onClick={() => scrollHandle(aboutRef)}>Обо мне</li>
        <li onClick={() => scrollHandle(servicesRef)}>Услуги</li>
        <li onClick={() => scrollHandle(reviewsRef)}>Отзывы</li>
        <li onClick={() => scrollHandle(questionsRef)}>Вопросы</li>
      </ul>
    </div>
  );
};

export default Header;
