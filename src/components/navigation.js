import React, { useState } from "react";

function Navigation() {
  const [navClicked, setNavClicked] = useState(false);

  const linkList = ["", "about", "projects", "contact"];

  function handleNavClick() {
    if (navClicked) {
      setNavClicked(false);
    } else {
      setNavClicked(true);
    }
    handleMenu();
  }

  function handleMenu() {
    if (navClicked === true) {
      console.log("The menu is open. " + navClicked);
    } else {
      console.log("The menu is closed. " + navClicked);
    }
  }

  let navLinkAnimation = {
    opacity: navClicked ? "1" : "0",
    transition: "0.75s",
    transitionDelay: navClicked ? "1s" : "0s",
    visibility: navClicked ? null : "hidden",
  };

  return (
    <section id="navigation">
      <button id="nav-btn" onClick={handleNavClick}>
        <i className="fas fa-cube"></i>
      </button>
      <ul
        id="nav-menu"
        style={{
          width: navClicked ? "600px" : "0",
          opacity: navClicked ? "1" : "0",
          transition: "1s ease-in-out",
          transitionDelay: navClicked ? "0s" : "0.75s",
        }}
      >
        {linkList.map((link) => {
          return (
            <li>
              <a className="nav-menu-link" style={navLinkAnimation} href={"/" + link}>
                <span className="link-text">{((link === "") ? "home" : link)}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Navigation;
