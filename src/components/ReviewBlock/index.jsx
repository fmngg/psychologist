import React from "react";
import "./ReviewBlock.scss";

import { reviews } from "../../assets/db";
import { FormContext } from "../../App";

const ReviewBlock = () => {
  const { setShowForm, setFormName } = React.useContext(FormContext);

  const [review, setReview] = React.useState(0);

  const onClickNext = () => {
    review < reviews.length - 1 ? setReview(review + 1) : setReview(review);
  };

  const onClickPrevious = () => {
    review > 0 ? setReview(review - 1) : setReview(review);
  };

  return (
    <>
      <div className="reviews-wrapper">
        <svg
          onClick={() => onClickPrevious()}
          width="18"
          height="30"
          viewBox="0 0 18 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.24033 15.8232L15.1162 29.6607C15.5708 30.1139 16.3069 30.1131 16.7608 29.6584C17.2143 29.2038 17.2131 28.4673 16.7584 28.0139L3.70846 14.9999L16.7589 1.9861C17.2135 1.53258 17.2147 0.796587 16.7612 0.341902C16.5337 0.113974 16.2356 7.62939e-06 15.9376 7.62939e-06C15.6403 7.62939e-06 15.3434 0.113211 15.1163 0.339558L1.24033 14.1767C1.02137 14.3946 0.898495 14.691 0.898495 14.9999C0.898495 15.3089 1.02172 15.605 1.24033 15.8232Z"
            fill="#49362B"
          />
        </svg>
        <div className="review-block">
          <p className="date">{reviews[review].date}</p>
          <p className="text">{reviews[review].text}</p>
          <p className="name">{reviews[review].author}</p>
        </div>

        <svg
          onClick={() => onClickNext()}
          width="18"
          height="30"
          viewBox="0 0 18 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7597 14.1768L2.88379 0.33925C2.42916 -0.113854 1.69311 -0.113092 1.23924 0.341594C0.785729 0.796221 0.786901 1.53268 1.24159 1.98614L14.2915 15.0001L1.24112 28.0139C0.786491 28.4674 0.785319 29.2034 1.23877 29.6581C1.46629 29.886 1.76436 30 2.06242 30C2.35973 30 2.65662 29.8868 2.88373 29.6604L16.7597 15.8233C16.9786 15.6054 17.1015 15.309 17.1015 15.0001C17.1015 14.6911 16.9783 14.395 16.7597 14.1768Z"
            fill="#49362B"
          />
        </svg>
      </div>
      <div className="progress">
        <p>
          {reviews[review].id + 1} / {reviews.length}
        </p>
        <progress max={reviews.length} value={reviews[review].id + 1} />
        <p
          className="send-review"
          onClick={() => {
            setShowForm(true);
            setFormName("отзыв");
          }}
        >
          Оставить отзыв
        </p>
      </div>
    </>
  );
};

export default ReviewBlock;
