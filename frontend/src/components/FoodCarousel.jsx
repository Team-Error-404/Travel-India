import React, {useState} from 'react'
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom'
import chena_poda from '../assets/img/odisha/chena_poda.jpg'
import galouti_kebab from '../assets/img/utter_pradesh/galouti_kebab.jpg'
import chole_bhature from '../assets/img/delhi/chole_bhature.jpg'
import laal_maas from '../assets/img/rajasthan/laal_maas.jpg'
//import chena_poda from '../Assets/images/food/chena_poda.jpg'
//import  from '../Assets/images/taj_mahal.jpg'
function FoodCarousel() {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3}
  ]
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/" >
        <div class="card" >
          <img src={chena_poda} class="card-img-top" alt="..."/>
          <div class="card-body top-state-body">
            <h3>Chena Poda</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={chole_bhature} class="card-img-top" alt="..." />
          <div class="card-body top-state-body">
            <h3>Chole Bhature</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={galouti_kebab} class="card-img-top" alt="..."/>
          <div class="card-body top-state-body">
            <h3>Galouti Kebab</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={laal_maas} class="card-img-top" alt="..." />
          <div class="card-body top-state-body">
            <h3>Laal Maas</h3>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
      {/* <Link className="px-3 nav-link state" tp="/">
        <div class="card" >
          <img src={red_fort} class="card-img-top" alt="..." />
          <div class="card-body top-state-body">
            <h2>State 5</h2>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link> */}
      
    </Carousel>
  )
}

export default FoodCarousel
