import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ContactUsSection from "./ContactUsSection";
import FeedBack from "./FeedBack";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AllServices from "./AllServices";
import NavBar from "./NavBar";
import OnScreenProjects from "./Projects/OnScreenProjects";

function BraceCodes() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <AllServices />
      <OnScreenProjects />
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <FeedBack
          title="Ahmad Sajad"
          desc="
           I got my website developed by them and also the SMS service. The
           website is fully dynamic and they just introduced me to the world of
           websites in the real sense. I was not expecting someone to be so
           clear and open to their business, and yes the SMS service is best
           and 100% delivery report."
        />
        <FeedBack
          title="AMSC Technologies"
          desc="
        
        I am pleased with the services you guys provide, i was not
        epecting this much in such a small time. Thanks and keep
        shining!
      "
        />
        <FeedBack
          title="Umar Mukhtar"
          desc="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <FeedBack
          title="Ishfaq"
          desc="
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        />
      </Carousel>
      <ContactUsSection />
    </>
  );
}

export default BraceCodes;
