import React from "react";
import "./ServiceItem.scss";

const ServiceItem = ({ title, text, img }) => {
  return (
    <div className="service-wrapper">
      <img src={img} />

      <div className="service">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <button>Подробнее</button>
    </div>
  );
};

export default ServiceItem;
