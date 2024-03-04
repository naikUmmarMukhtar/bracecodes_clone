import React, { useState } from "react";
import DotLine from "../../ui/dot-line";
import Project from "./Project";
import { useNavigate } from "react-router-dom";
import Work from "./Work";

function OnScreenProjects() {
  const [onScreenProjects, setOnScreenProjects] = useState([
    {
      id: 0,
      title: "Kashmir Nirvana",
      btnContent: "Nirvana",
      link: "https://kashmmirnirvana.com",
      desc: "Ticket Booking App!",
      underLay: false,
    },
    {
      id: 1,
      title: "Cheezymezzy",
      btnContent: "Cheezymezzy",
      link: "https://cheezymezzy.com",
      desc: "A Food delivery App!",
      underLay: false,
    },
    {
      id: 2,
      title: "Kupos",
      btnContent: "Kupos",
      link: "https://kupos.cl",
      desc: "Ticket Booking App!",
      underLay: false,
    },
    {
      id: 3,
      title: "BraceCodes",
      btnContent: "BraceCodes",
      link: "https://bracecodes.com",
      desc: "PortFolio",
      underLay: false,
    },
  ]);

  const navigate = useNavigate();
  let navigateHandler = () => {
    navigate("/work");
  };

  let showUnderLayHandler = (proj) => {
    setOnScreenProjects(
      [...onScreenProjects],
      (proj.underLay = !proj.underLay)
    );
  };

  return (
    <>
      <div className="project_section_wrapper" id="work">
        <div className="project_section_title">Our Projects | Products</div>
        <DotLine center={false} primaryColor={true} />
        <div className="project_section_desc">
          We have developed a lot of products for ourselves and more for clients
          in which some prominent ones are -
        </div>

        <div className="project_work_wrapper">
          {onScreenProjects?.map((proj, index) => {
            return (
              <div key={proj.id} onClick={() => showUnderLayHandler(proj)}>
                <Project
                  title={proj.title}
                  desc={proj.desc}
                  btnContent={proj.btnContent}
                  webLink={proj.link}
                  underLay={proj.underLay}
                />
              </div>
            );
          })}
        </div>

        <div className="see_all_project_btn">
          <span className="text_btn" onClick={navigateHandler}>
            See all
          </span>
        </div>
      </div>
    </>
  );
}

export default OnScreenProjects;
