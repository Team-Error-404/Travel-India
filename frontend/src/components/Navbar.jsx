import React from 'react'
import "../assets/css/navbar.css"
import travel_india_logo from "../assets/img/travel_india_logo.png"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top pt-2">
      <div class="container text-center">
        <a class="navbar-brand" href="/"><img src={travel_india_logo} alt=""/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item px-2">
              <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item dropdown  px-2">
              <div class="nav-link dropdown-toggle" >GO TO DESTINATIONS</div>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">a</a></li>
                <li><a class="dropdown-item" href="/"> a</a></li>
                <li><a class="dropdown-item" href="/">a</a></li>
              </ul>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" href="/">COVID DASHBOARD</a>
          </li>
            <li class="nav-item  px-2">
                <a class="nav-link" href="#shorcuts">MAKE PLANS</a>
              </li>
            <li class="nav-item  px-2">
              <a class="nav-link" href="#contactus">CONTACT US</a>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
