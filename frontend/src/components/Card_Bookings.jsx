import React from 'react'

function Card_Bookings(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 mx-auto mt-3">
            <div className="card">
                <a href={props.data.link} className="card-link" target="blank">
                    <img src={props.data.src} className="card-img-top" alt="mask" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.cardtitle}</h5>
                        <p className="card-text">{props.data.cardtext}</p>
                        <span className="book">Book Now</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card_Bookings