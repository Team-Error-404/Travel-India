import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import red_fort from '../assets/img/delhi/red_fort.jpg'
import hawaMahal from '../assets/img/rajasthan/hawa-mahal1.jpg'
import jagannath_puri from '../assets/img/odisha/jagannath_puri.png'

function DestinationCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ]
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/top-places/Red Fort">
        <div className="card" >
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Red Fort, Delhi</h3>
            <p className="card-text text-muted text-left">The Red Fort is a historical fortification in the old Delhi area. Shah Jahan constructed it in the year 1639 as a result of a capital shift from Agra to Delhi. Used as the main residence of the emperors of the Mughal dynasty, this imposing piece of architecture derives its name from its impregnable red sandstone walls.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/top-places/Puri">
        <div className="card" >
          <img src={jagannath_puri} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Puri Jagannath Temple, Odisha</h3>
            <p className="card-text text-muted text-left">Located in the sacred town of Puri, the Jagannath Temple or the pride of India . This glorious temple is the abode of Lord Jagannath who is a form of Lord Vishnu. It is the most revered pilgrimage site for Hindus and is included in the pious Char Dham Yatra with Badrinath, Dwarka and Rameshwaram.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={hawaMahal} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Hawa Mahal, Rajasthan</h3>
            <p className="card-text text-muted text-left">
              Hawa Mahal is a palace in Jaipur, India approximately 300 kilometers from the capital city of Delhi. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The structure was built in 1799 by Maharaja Sawai Pratap Singh, the grandson of Maharaja Sawai Jai Singh, who was the founder of Jaipur              </p>
          </div>
        </div>
      </Link>
    </Carousel>
  )

}

export default DestinationCarousel