import React from "react";
import DotLine from "../ui/dot-line";

function ContactUsSection() {
  return (
    <>
      <div className="contact_section_container" id="contact">
        <div className="contact_section_wrapper">
          <div className="contact_desc_wrapper">
            <div className="title">Contact us</div>
            <DotLine center={true} primaryColor={false} />
            <div className="desc">
              If you want to discuss and plan your business goals, Awesome! We
              love supporting our customers in different areas and guide them
              <span className="extra_text">
                {" "}
                appropriatly to boost their Business.
              </span>
            </div>
          </div>
          <div className="phone_form_address_wrapper">
            <div className="phone_wrapper">
              <div>+91 2564824587</div>
              <div>+91 2564824587</div>
              <div>+91 2564824587</div>
            </div>
            <form action="">
              <div className="form_wrapper">
                <div className="query_title">Send Your Query</div>

                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Email id" required />
                <input
                  type="text"
                  placeholder="Describe Your Requirement"
                  required
                />
                <button className="form_btn">Send</button>
              </div>
            </form>
            <div className="address_wrapper">
              2nd Floor | Al Burj complex | Opposite Govt. Boys Degree College
              Pulwama
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsSection;
