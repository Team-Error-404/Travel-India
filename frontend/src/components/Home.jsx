import React,{useEffect, useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import hero_image from '../assets/img/hero_image.jpg'
import hero_caption from '../assets/img/hero-caption.png'
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
  
  
  return (
    <div className="">
      <Navbar />
      <section>
        <div class="hero-container">
          <img src={hero_image} alt="" class="hero-img" />
          <div class="hero-caption-container">
            <img src={hero_caption} alt="hero-caption" className="hero-caption"/>
          </div>
        </div>
      </section>
      <section id="covid-19-dashboard" className="bg-light container mb-5">
        <h2 className="pt-5 mt-2 header">COVID DASHBOARD</h2>
        <div id="card-container">
            <div id="confirmed" class="covid-card">Confirmed:<br/>{confirmed}</div>
            <div id="recovered" class="covid-card">Recovered:<br/>{recovered}</div>
            <div id="active" class="covid-card">Active:<br/>{active}</div>
            <div id="deceased" class="covid-card">Deceased:<br/>{deceased}</div>
        </div>
      </section>
      <main class="main-container ">
        <section id="video" className='mt-3'>
          <h2 className="header mb-4 ">INDIA AT GLANCE </h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/77czO8sxABI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section className="top-states my-5">
          <h2 className="header">TOP STATES</h2>
          <StateCarousel />
        </section>
        <section className="top-states my-5">
          <h2 className="header">TOP DESTINATIONS</h2>
          <DestinationCarousel/>
        </section>
        <section className="top-states my-5">
          <h2 className="header">TOP FOODS</h2>
          <FoodCarousel/>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home