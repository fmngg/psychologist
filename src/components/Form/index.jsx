import React from "react";
import { FormContext } from "../../App";

import "./Form.scss";

const Form = () => {
  const { setShowForm, formName } = React.useContext(FormContext);

  return (
    <div className="form-bg">
      <div className="form">
        <svg
          onClick={() => setShowForm(false)}
          width="24px"
          height="25px"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M11.9999 13.4972C11.5698 13.4972 11.1397 13.3364 10.8118 13.0156L0.492339 2.91532C-0.164113 2.27282 -0.164113 1.23111 0.492339 0.588861C1.14853 -0.0533834 2.21264 -0.0533834 2.86914 0.588861L11.9999 9.52617L21.1308 0.589173C21.7872 -0.0530713 22.8512 -0.0530713 23.5074 0.589173C24.1641 1.23142 24.1641 2.27313 23.5074 2.91563L13.1881 13.0159C12.86 13.3368 12.4299 13.4972 11.9999 13.4972Z"
              fill="#ffffff"
            />
            <path
              d="M12.0001 10.7172C12.4302 10.7172 12.8603 10.8779 13.1882 11.1987L23.5077 21.299C24.1641 21.9415 24.1641 22.9832 23.5077 23.6255C22.8515 24.2677 21.7874 24.2677 21.1309 23.6255L12.0001 14.6882L2.86922 23.6252C2.21277 24.2674 1.14876 24.2674 0.492631 23.6252C-0.16414 22.9829 -0.16414 21.9412 0.492631 21.2987L10.8119 11.1984C11.14 10.8776 11.5701 10.7172 12.0001 10.7172Z"
              fill="#ffffff"
            />
          </g>
        </svg>
        <h1>Оставьте {formName}</h1>
        <div className="inputs">
          <input placeholder="Имя" />
          <input placeholder="Почта для связи" />
          <textarea placeholder={`Ваш ${formName}`} />
          <button onClick={() => setShowForm(false)}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
