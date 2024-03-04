import React from "react";

function HeroSection() {
  return (
    <>
      <div className="main_container">
        <div className="left_section"></div>
        <div className="right_section"></div>
      </div>
      <div className="bg_over_lay">
        <div className="text_over_lay">
          <div className="title">
            Bracecodes <br />
            Software Solutions Pvt. Ltd.
          </div>
          <p className="desc">
            We Develop the
            <span className="web"> Web </span>
            and Power Up the
            <span className="mobiles"> Mobiles</span>
          </p>
          <div className="btn">Any Query?</div>
        </div>
        <div className="img_over_lay">
          <img src="assets/images/web-1.webp" alt="img" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
