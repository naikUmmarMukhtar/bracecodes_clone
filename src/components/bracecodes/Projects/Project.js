import React from "react";

function Project({ title, desc, btnContent, underLay, webLink }) {
  return (
    <>
      <div className={underLay ? "show_under_lay" : "hide_under_lay"}>
        <div className="hidden_over_lay_text"> {webLink}</div>
        <div className="_project">
          <div
            className={
              underLay ? "_under_lay_project_wrapper" : "_project_wrapper"
            }
          >
            <div className="title_desc_wrapper">
              <div className="title">{title}</div>
              <div className="desc">{desc}</div>
            </div>
            <div className="btn_wrapper" onClick={() => window.open(webLink)}>
              {btnContent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
