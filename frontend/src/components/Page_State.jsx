import React from 'react'
import '../assets/css/state.css'

import StarRatingComponent from 'react-star-rating-component';
import NavBar from './Navbar'
import Footer from './Footer'
import Dashboard from './Dashboard'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Card_Top_Places from './Card_Top_Places'
import Card_Top_Foods from './Card_Top_Foods'


import states from '../assets/data/states.js'

function Page_State(props) {
    let state = props.match.params.state;
    let data = states[state];
    const bgStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.bg})`
    }
    return (
        <>
            <NavBar />
            <div className="banner" style={bgStyle}>
                <h1>{state}</h1>
                <p className='mb-0'>{data.tagLine}</p>
            </div>
            <Dashboard state={state} />
            <h2 className='mt-5 header'>Top places to explore</h2>
            <div className="container">
                <div className="row mt-2 mx-auto">
                    {
                        data.topPlaces.map(place => {
                            return (
                                <Card_Top_Places key={Math.random()} place={place} />
                            )
                        })
                    }
                </div>
                {/* top foods */}
                <h2 className='mt-5 header'>Must try Foods</h2>
                <div className="row mt-2 mb-4 mx-auto">
                    {
                        data.topFoods.map(food => {
                            return (
                                <Card_Top_Foods key={Math.random()} food={food} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page_State