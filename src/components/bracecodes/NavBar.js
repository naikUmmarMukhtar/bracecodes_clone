import React from "react";
import { useState } from "react";

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navLinks, setNavLinks] = useState([
    { id: 1, linkText: "Home", isActive: true, href: "#home" },
    { id: 2, linkText: "About", isActive: false, href: "#about" },
    { id: 3, linkText: "Services", isActive: false, href: "#services" },
    { id: 4, linkText: "Work", isActive: false, href: "#work" },
    { id: 5, linkText: "Contact", isActive: false, href: "#contact" },
  ]);
  let scrollHandler = () => {
    setScrollPosition(window.scrollY);
  };
  window.addEventListener("scroll", scrollHandler);
  let navLinkHandler = (navLink, key) => {
    navLinks.map((newLink) => {
      if (navLink.id === newLink.id) {
        setNavLinks([...navLinks], (newLink.isActive = !newLink.isActive));
      } else {
        setNavLinks([...navLinks], (newLink.isActive = false));
      }
    });
  };
  return (
    <>
      <div
        className={scrollPosition > 100 ? "navBarScroll" : "navbar_wrapper"}
        id="home"
      >
        <div className="navbar_parent">
          <div className="logo_links_wrapper">
            <div className="logo">
              <img src="assets/images/logo.webp" alt="code" />
            </div>
            <div className="links_wrapper">
              <div>
                {navLinks.map((navLink, key) => (
                  <div key={key}>
                    <a
                      href={navLink.href}
                      key={navLink.id}
                      className={navLink.isActive ? "active_nav_link" : "link"}
                      onClick={() => navLinkHandler(navLink)}
                    >
                      {navLink.linkText}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
