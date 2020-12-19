import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import taj_mahal from '../assets/img/utter_pradesh/taj_mahal.jpg'
import red_fort from '../assets/img/delhi/red_fort.jpg'
import city_palace from '../assets/img/rajasthan/city_palace.jpg'
import jagannath_puri from '../assets/img/odisha/jagannath_puri.png'

//import  from '../Assets/images/taj_mahal.jpg'
function DestinationCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ]
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/" >
        <div className="card" >
          <img src={taj_mahal} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Taj Mahal, Agra</h3>
            <h5>Uttar Pradesh</h5>
            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={jagannath_puri} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Puri Jagannath Temple, Puri</h3>
            <h5>Odisha</h5>
            <p class="card-text text-muted text-left">Located in the sacred town of Puri, the Jagannath Temple or the pride of India . This glorious temple is the abode of Lord Jagannath who is a form of Lord Vishnu. It is the most revered pilgrimage site for Hindus and is included in the pious Char Dham Yatra with Badrinath, Dwarka and Rameshwaram.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={city_palace} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>City Palace, Udaipur</h3>
            <h5>Rajasthan</h5>
            <p class="card-text text-muted text-left">Built on the banks of Lake Pichola, the City Palace in Udaipur is considered to be the largest royal complex in Rajasthan. The magnificent palace was built in the year 1559 by Maharana Uday Singh and served as the main seat of power, where the Maharanas lived and administered the kingdom from.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div class="card" >
          <img src={red_fort} class="card-img-top" alt="..." />
          <div class="card-body top-state-body">
            <h3>Red Fort, Delhi</h3>
            <h5>Delhi</h5>
            <p class="card-text text-muted text-left">The Red Fort is a historical fortification in the old Delhi area. Shah Jahan constructed it in the year 1639 as a result of a capital shift from Agra to Delhi. Used as the main residence of the emperors of the Mughal dynasty, this imposing piece of architecture derives its name from its impregnable red sandstone walls.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>place, city</h3>
            <h5>state</h5>
            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>

    </Carousel>
  )

}

export default DestinationCarousel