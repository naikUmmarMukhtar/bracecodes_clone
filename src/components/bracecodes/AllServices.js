import React from "react";
import DotLine from "../ui/dot-line";

function AllServices() {
  return (
    <>
      <div className="service_offered_section_wrapper" id="services">
        <div className="service_offered_title">Service Offered</div>
        <DotLine center={false} primaryColor={true} />

        <div className="service_offered_desc">
          <span>
            We offer a lot of services in the field of IT which satisfy our
            customers and help our customers to grow.
          </span>
        </div>

        <div className="card_on_rows_wrapper">
          <div className="row_first anim">
            <div className="inner_content_wrapper">
              <div className="logo">
                <img
                  src="assets/images/icons8-screen-50 (1).png"
                  color="white"
                />
              </div>
              <div className="title">Website Development</div>
              <div className="desc">
                We Develop Custom Websites - Simple Portfolio to Complex
                Ecommerce Websites
              </div>
            </div>
          </div>
          <div className="row_second anim">
            <div className="inner_content_wrapper">
              <div className="logo">
                <img src="assets/images/icons8-responsive-64 (1).png" />
              </div>
              <div className="title">Mobile App Development</div>
              <div className="desc">
                We Develop Custom Complex Mobile Apps for both Platforms -
                Android and IOS
              </div>
            </div>
          </div>
          <div className="row_third anim">
            <div className="inner_content_wrapper">
              <div className="logo">
                <img src="assets/images/icons8-book-50.png" />
              </div>
              <div className="title">Certification Courses</div>
              <div className="desc">
                We Teach C | C++ | JAVA | PHP | JavaScript | Android Development
                | Flutter Development
              </div>
            </div>
          </div>
          <div className="row_fourth anim">
            <div className="inner_content_wrapper">
              <div className="logo">
                <img src="assets/images/icons8-services-50.png" />
              </div>
              <div className="title">Services</div>
              <div className="desc">
                We Offer Custom Requiremnt Softwares- Inventor, Library etc |
                Branding and Promotion of Business Units | SMS Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllServices;
