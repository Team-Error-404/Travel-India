import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import varanasi from '../assets/img/utter_pradesh/varanasi.jpg'
import red_fort from '../assets/img/delhi/red_fort.jpg'
import rajasthan from '../assets/img/rajasthan/bg.jpg'
import odisha from '../assets/img/odisha/bg.jpg'
import states from '../assets/data/states.js'
//import  from '../Assets/images/taj_mahal.jpg'
function StateCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ]
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/" >
        <div className="card" >
          <img src={varanasi} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Uttar Pradesh</h3>
            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/states/Delhi">
        <div className="card" >
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h2>Delhi</h2>
            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/states/Rajasthan">
        <div className="card" >
          <img src={rajasthan} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Rajasthan</h3>
            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/states/Odisha">
        <div className="card" >
          <img src={odisha} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Odisha</h3>
            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>State 5</h3>
            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>

    </Carousel>
  )
}

export default StateCarousel
