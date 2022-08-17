import React from "react";
import "./ServiceItem.scss";
import img from "../../assets/img/wedding.png";

const ServiceItem = () => {
  return (
    <div className="service">
      <img src={img} />
      <h1>Хадрахат калот</h1>
      <p>
        Семейная жизнь, как любая долгая дорога, требует подготовки. Для этого и
        Семейная жизнь, как любая долгая дорога, требует подготовки. Для этого и
        Семейная жизнь, как любая долгая дорога, требует подготовки. Для этого и
        Семейная жизнь, как любая долгая дорога, требует подготовки. Для этого и
        нужны предсвадебные консультации – важный этап на пути к крепкому браку.
        Таким образом закладывается основа прочных отношений...
      </p>
      <button>Подробнее</button>
    </div>
  );
};

export default ServiceItem;
