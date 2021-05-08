import React, { useState } from 'react';

function Navigation(){
  const [navClicked, setNavClicked] = useState(false);

  return(
    <section id="navigation">
      <button id="nav-btn"><i class="fas fa-cube"></i></button>
    </section>
  )
}

export default Navigation;