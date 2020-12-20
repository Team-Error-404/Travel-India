import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import red_fort from '../assets/img/delhi/red_fort.jpg'
import rajasthan from '../assets/img/rajasthan/bg.jpg'
import odisha from '../assets/img/odisha/bg.jpg'
function StateCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ]
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/states/Delhi">
        <div className="card" >
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h2>Delhi</h2>
            <p className="card-text text-muted text-left">The capital of India, Delhi is a cosmopolitan city with a historic old Delhi and the modern New Delhi. From historical monuments to crowded shopping malls, Dilli has multiple personalities and is considered to be the city with a heart.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/states/Rajasthan">
        <div className="card" >
          <img src={rajasthan} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Rajasthan</h3>
            <p className="card-text text-muted text-left">One of the most colourful and vibrant states in the country, the Indian state of Rajasthan is popularly known to many as the Land of the Kings, is a beautiful example of India's age-old opulence and grandeur, traces of which still linger in the air of this state.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/states/Odisha">
        <div className="card" >
          <img src={odisha} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Odisha</h3>
            <p className="card-text text-muted text-left">Odisha- the land of paddy fields and palm-fringed silver beaches, temples, rivers, waterfalls and tribal people, is filled with major attractions such as the temples of Bhubaneshwar and Puri, miles of clean beaches and the magnificent Sun Temple of Konark.</p>
          </div>
        </div>
      </Link>
    </Carousel>
  )
}

export default StateCarousel
