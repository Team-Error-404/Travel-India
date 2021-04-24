import React from 'react'
import "../assets/css/navbar.css"
import travel_india_logo from "../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="fixed-top px-2" expand='lg'>
      <div className="container">
        <a className="navbar-brand" href="/"><img src={travel_india_logo} alt="" /></a>
        <Navbar.Toggle aria-controls="navbarSupportedContent">
          <FontAwesomeIcon icon={faBars} className="nav-toggler" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <a className="nav-link" href="/">HOME</a>
            </li>
            <li className="nav-item dropdown  px-2">
              <div className="nav-link dropdown-toggle" >EXPLORE STATES</div>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/states/Odisha">Odisha</a></li>
                <li><a className="dropdown-item" href="/states/Delhi">Delhi</a></li>
                <li><a className="dropdown-item" href="/states/Rajasthan">Rajasthan</a></li>
              </ul>
            </li>
            <li className="nav-item  px-2">
              <a className="nav-link" href="/#top-destinations">TOP DESTINATIONS</a>
            </li>
            <li className="nav-item  px-2">
              <a className="nav-link" href="/#shorcuts">MAKE PLANS</a>
            </li>
            <li className="nav-item  px-2">
              <a className="nav-link" href="/covid-guidelines">COVID GUIDELINES</a>
            </li>
            <li className="nav-item  px-2">
              <a className="nav-link" href="/contact-us">CONTACT US</a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavBar
