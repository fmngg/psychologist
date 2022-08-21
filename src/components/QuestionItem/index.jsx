import React from "react";
import "./QuestionItem.scss";

const QuestionItem = ({ title, answer }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className={show ? "question show" : "question"}>
      <div className="question__title" onClick={() => setShow(!show)}>
        <h1>{title}</h1>
        <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.0001 0.159658C12.4302 0.159658 12.8603 0.323892 13.1882 0.651666L23.5077 10.9712C24.1641 11.6277 24.1641 12.692 23.5077 13.3482C22.8515 14.0044 21.7874 14.0044 21.1309 13.3482L12.0001 4.21687L2.86922 13.3479C2.21277 14.0041 1.14877 14.0041 0.492632 13.3479C-0.164141 12.6917 -0.164141 11.6274 0.492632 10.9709L10.8119 0.651346C11.14 0.323519 11.5701 0.159658 12.0001 0.159658Z"
            fill="#49362B"
          />
        </svg>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionItem;
