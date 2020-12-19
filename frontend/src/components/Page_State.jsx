import React from 'react'
import '../assets/css/state.css'

import StarRatingComponent from 'react-star-rating-component';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Card_Top_Places from './Card_Top_Places'
import Card_Top_Foods from './Card_Top_Foods'


import states from '../assets/data/states.js'

function Page_State(props) {
    let state = props.match.params.state;
    console.log(state);
    let data = states[state];
    console.log(data);
    console.log(props);
    const bgStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.bg})`
    }
    return (
        <>
            <div className="banner" style={bgStyle}>
                <h1>{state}</h1>
                <p>{data.tagLine}</p>
            </div>
            <h2 className='text-center'>Top places</h2>
            <div className="container">
                <div className="row mt-4">
                    {
                        data.topPlaces.map(place => {
                            return (
                                < Card_Top_Places place={place} />
                            )
                        })
                    }
                </div>
                {/* top foods */}
                <h2 className='text-center mt-5'>Top Foods</h2>
                <div className="row mt-4">
                    {
                        data.topFoods.map(food => {
                            return (
                                < Card_Top_Foods food={food} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Page_State
