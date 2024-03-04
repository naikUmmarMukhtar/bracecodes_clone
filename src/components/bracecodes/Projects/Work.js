import React, { useEffect, useState } from "react";
import DotLine from "../../ui/dot-line";
import Project from "./Project";
import OnScreenProjects from "./OnScreenProjects";

function Work() {
  const [projectData, setProjectData] = useState([
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
    {
      id: 4,
      title: "YouTube",
      btnContent: "YouTube",
      link: "https://youtube.com",
      desc: "A Social Media App",
      underLay: false,
    },
    {
      id: 5,
      title: "Amazon",
      btnContent: "Amazon",
      link: "https://amazon.com",
      desc: " Shopping App",
      underLay: false,
    },
    {
      id: 6,
      title: "Zomato",
      btnContent: "Zomato",
      link: "https://zomato.com",
      desc: "A Food delivery App",
      underLay: false,
    },
    {
      id: 7,
      title: "FaceBook",
      btnContent: "FaceBook",
      link: "https://FaceBook",
      desc: "A Social Media App",
      underLay: false,
    },
  ]);

  let showUnderLayHandler = (work) => {
    setProjectData([...projectData], (work.underLay = !work.underLay));
  };

  return (
    <>
      <div className="project_section_wrapper">
        <div className="project_section_title">Our Team Work </div>
        <DotLine center={false} primaryColor={true} />
        <div className="project_section_desc">
          It takes time to Build something
        </div>

        <div className="project_work_wrapper">
          {projectData?.map((work, index) => {
            return (
              <div key={work.id} onClick={() => showUnderLayHandler(work)}>
                <Project
                  title={work.title}
                  desc={work.desc}
                  btnContent={work.btnContent}
                  underLay={work.underLay}
                  webLink={work.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Work;
