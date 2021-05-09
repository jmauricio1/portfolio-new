import React, { useState } from "react";

function Navigation() {
  const [navClicked, setNavClicked] = useState(true);

  function handleNavClick() {
    if(navClicked){
      setNavClicked(false);
    }
    else{
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

  return (
    <section id="navigation">
      <button id="nav-btn" onClick={handleNavClick}>
        <i className="fas fa-cube"></i>
      </button>
    </section>
  );
}

export default Navigation;
