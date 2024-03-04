import React from "react";

function FeedBack({ title, desc }) {
  return (
    <>
      <div className="feed_back_wrapper">
        <div className="feed_back_parent">
          <div className="logo">
            <img src="assets/images/quote.webp" />
          </div>
          <div className="title">{title}</div>
          <div className="rating">
            <img src="assets/images/rating star.png" />
            <img src="assets/images/rating star.png" />
            <img src="assets/images/rating star.png" />
            <img src="assets/images/rating star.png" />
            <img src="assets/images/rating star.png" />
          </div>
          <div className="desc">{desc}</div>
        </div>
      </div>
    </>
  );
}

export default FeedBack;
