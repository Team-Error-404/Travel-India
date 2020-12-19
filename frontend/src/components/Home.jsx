import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import hero_image from '../assets/img/hero_image.jpg'
import hero_caption from '../assets/img/hero-caption.png'
import flight from '../assets/img/Bookings/flight.jpg'
import hotel from '../assets/img/Bookings/hotel.jpg'
import pack from '../assets/img/Bookings/package.jpg'
import "../assets/css/home.css"
import "../assets/css/covid.css"
import StateCarousel from './StateCarousel'
import DestinationCarousel from './DestinationCarousel'
import FoodCarousel from './FoodCarousel'
const Home = () => {

  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [active, setActive] = useState(0);
  const [deceased, setDeceased] = useState(0);
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero_image})`
  }

  return (
    <>
      <Navbar />
      {/* <section> */}

      <div className='hero-image'>
        {/* <img src={hero_image} alt="" className="hero-img" /> */}
        <div className="hero-caption-container">
          <img src={hero_caption} alt="hero-caption" className="hero-caption" />
        </div>
      </div>
      {/* </section> */}
      <section id="covid-19-dashboard" className="container py-5 bg-light ">
        <h2 className="mt-2 pb-3 header">COVID DASHBOARD</h2>
        <div id="card-container">
          <div id="confirmed" className="covid-card">Confirmed:<br />{confirmed}</div>
          <div id="recovered" className="covid-card">Recovered:<br />{recovered}</div>
          <div id="active" className="covid-card">Active:<br />{active}</div>
          <div id="deceased" className="covid-card">Deceased:<br />{deceased}</div>
        </div>
      </section>
      <main className="main-container ">
        <section id="video" className='mt-3'>
          <h2 className="header mb-4 ">INDIA AT GLANCE </h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/77czO8sxABI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section className="top-states my-5">
          <h2 className="header">EXPLORE STATES</h2>
          <StateCarousel />
        </section>
        <section className="top-states my-5">
          <h2 className="header">TOP DESTINATIONS</h2>
          <DestinationCarousel />
        </section>
        <section className="top-states my-5">
          <h2 className="header">EXPLORE FOODS</h2>
          <FoodCarousel />
        </section>
        <section id="shorcuts">
          <h2 className="header mb-3 explore">MAKE YOUR PLANS</h2>
          <div className="card-deck">
            <div className="card">
              <a href="/book-flights" className="card-link">
                  <img src={flight} className="card-img-top" alt="Flight" />
                  <span>BOOK FLIGHT</span>
              </a>
            </div>
            <div className="card">
              <a href="/book-hotels" className="card-link">
                <img src={hotel} className="card-img-top" alt="Hotel" />
                <span>BOOK HOTELS</span>
              </a>
            </div>
            <div className="card">
              <a href="/book-package" className="card-link">
                <img src={pack} className="card-img-top" alt="package" />
                <span>BOOK PACKAGE</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home