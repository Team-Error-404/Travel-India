import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import hero_image from '../assets/img/hero_image.jpg'
import hero_caption from '../assets/img/hero-caption.png'
import "../assets/css/home.css"
import "../assets/css/covid.css"
import StateCarousel from './StateCarousel'
import DestinationCarousel from './DestinationCarousel'
import FoodCarousel from './FoodCarousel'

import firebase from 'firebase/app'
import 'firebase/firestore'


const Home = () => {

  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [active, setActive] = useState(0);
  const [deceased, setDeceased] = useState(0);

  useEffect(() => {
    firebase.firestore().collection('rating').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        localStorage.setItem(`${doc.data().id + '_count'}`, `${doc.data().count}`);
        localStorage.setItem(`${doc.data().id + '_user'}`, `${doc.data().user}`);
        console.log(`${doc.data().id + '_count'}`);
        console.log(`${doc.data().count}`);
        console.log(`${doc.data().id + '_user'}`);
        console.log(`${doc.data().user}`);
      });
    })
  }, []);

  return (
    <>
      <NavBar />
      {/* <section> */}

      <div className='hero-image'>
        {/* <img src={hero_image} alt="" className="hero-img" /> */}
        <div className="hero-caption-container">
          <img src={hero_caption} alt="hero-caption" className="hero-caption" />
        </div>
      </div>
      {/* </section> */}
      <section id="covid-19-dashboard" className="bg-light container mb-5">
        <h2 className="pt-5 mt-2 header">COVID DASHBOARD</h2>
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
      </main>
      <Footer />
    </>
  )
}

export default Home