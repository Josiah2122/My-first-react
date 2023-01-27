import React from "react"
import ReactIcon from "./images/React-icon.png"

export default function Header(){
 return(
  <header>
  <nav className="nav-bar">
   <img className="nav-img" src={ReactIcon} /> 
   <ul className="nav-items">
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
   </ul>
  </nav>
 </header>
 )
}
