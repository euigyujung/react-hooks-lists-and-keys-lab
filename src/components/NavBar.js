import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href= {props.home}></a>
    <a href= {props.about}></a>
    <a href= {props.projects}></a>
    
    </nav>;
}

export default NavBar;
