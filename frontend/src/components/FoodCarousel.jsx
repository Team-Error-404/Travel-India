import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import chena_poda from '../assets/img/odisha/chena_poda.jpg'
import galouti_kebab from '../assets/img/utter_pradesh/galouti_kebab.jpg'
import chole_bhature from '../assets/img/delhi/chole_bhature.jpg'
import laal_maas from '../assets/img/rajasthan/laal_maas.jpg'
//import chena_poda from '../Assets/images/food/chena_poda.jpg'
//import  from '../Assets/images/taj_mahal.jpg'
function FoodCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ]
  return (
    <Carousel breakPoints={breakPoints} className="top-states">
      <Link className="px-3 nav-link state" to="/" >
        <div className="card" >
          <img src={chena_poda} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Chena Poda</h3>
            <p className="card-text text-muted text-left">Chhena poda is a cheese dessert from the Indian state of Odisha. Chhena poda literally means Roasted Cheese in Odia.It is made of well-kneaded homemade fresh cheese chhena, sugar is baked for several hours until it browns. Chhena poda is the only well known Indian dessert whose flavor is predominantly derived from the caramelization of sugar.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={chole_bhature} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Chole Bhature</h3>
            <p className="card-text text-muted">Chole bhature is a food dish originating from northern India. However, in India, Delhi Chole Bhature is very popular.It is a combination of chana masala and bhatura/Puri, a fried bread made from maida. There is a distinct Punjabi variant of the dish. The dish is also very popular in Pakistan as a breakfast meal.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={galouti_kebab} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Galouti Kebab</h3>
            <p className="card-text text-muted">Tunde Ke Kabab, also known as Buffalo meat galouti kebab, is a dish made out of minced meat which is popular in Lucknow, India. Tunde ke kabab were introduced to the Nawab of Awadh Wajid Ali Shah. Lucknow’s iconic eating joint Tunday Kababi, started in 1905, is famous for serving buffalo meat galouti kebab.</p>
          </div>
        </div>
      </Link>
      <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={laal_maas} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h3>Laal Maas</h3>
            <p className="card-text text-muted">Laal maans is a meat curry from Rajasthan, India. It is a mutton curry prepared in a sauce of yoghurt and hot spices such as red Mathania chillies. This dish typically is very hot and rich in garlic, the gravy may be thick or liquid and is eaten with chapatis made out of wheat or bajra.</p>
          </div>
        </div>
      </Link>
      {/* <Link className="px-3 nav-link state" to="/">
        <div className="card" >
          <img src={red_fort} className="card-img-top" alt="..." />
          <div className="card-body top-state-body">
            <h2>State 5</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link> */}

    </Carousel>
  )
}

export default FoodCarousel
