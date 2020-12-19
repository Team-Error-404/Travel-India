import React, {useState} from 'react'
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom'
import varanasi from '../assets/img/utter_pradesh/varanasi.jpg'
import red_fort from '../assets/img/delhi/red_fort.jpg'
import rajasthan from '../assets/img/rajasthan/bg.jpg'
import odisha from '../assets/img/odisha/bg.jpg'
import states from '../assets/data/States.js'
//import  from '../Assets/images/taj_mahal.jpg'
function StateCarousel() {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3}
  ]
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/" >
        <div class="card" >
          <img src={varanasi} class="card-img-top" alt="..."/>
          <div class="card-body top-state-body">
            <h3>Utter Pradesh</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={red_fort} class="card-img-top" alt="..." />
          <div class="card-body top-state-body">
            <h2>Delhi</h2>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={rajasthan} class="card-img-top" alt="..."/>
          <div class="card-body top-state-body">
            <h3>Rajasthan</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={odisha} class="card-img-top" alt="..." />
          <div class="card-body top-state-body">
            <h3>Odisha</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={red_fort} class="card-img-top" alt="..." />
          <div class="card-body top-state-body">
            <h3>State 5</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      
    </Carousel>
  )
}

export default StateCarousel
