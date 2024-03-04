import React from "react";
import DotLine from "../ui/dot-line";

function AboutSection() {
  return (
    <>
      <div className="about_section_container" id="about">
        <div className="left_section">
          <img src="/assets/images/aboutus2.webp" alt="about us" />
        </div>
        <div className="right_section">
          <div className="about_title">About us</div>

          <DotLine center={false} primaryColor={true} />
          <div className="about_desc">
            <div className="desc_first">
              Bracecodes Software Solutions is a company established in November
              2016. After getting featured in many spheres of Web and Mobile
              Development we decided to register as Private Limited Company in
              Jan 2019 and we are presently a Private Limited Comapny from March
              2019.
            </div>
            <div>
              We design Dynamic Websites, Standalone Customized Desktop Apps,
              Mobile Apps for both Platforms - Android and IOS.
            </div>
            <div>
              We offer a Powerful tool for School Management called
              <span className="ease_my_school_title">Ease My School(EMS)</span>
              which gives you the power of efficent communication with parents
              and includes all the neccessary feature and some of the features
              are- attendance, Bus Tracking, Result Declaration, SMS Service
              integration, Fee Module, Class Tests, Notifications and much
              more...
            </div>
            <div>
              We also teach Certification courses - C, C++, Java, PHP,
              JavaScript.
            </div>
            <div>
              We are masters in teaching Android Development as a Job Oriented
              Course.
            </div>
            <div>
              We also offer some services - Branding and Promotion of your
              business Unit
            </div>
            <div>SMS Service to communicate with your clients.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
