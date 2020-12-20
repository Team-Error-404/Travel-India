import React from 'react'

function Card_Top_Foods(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 mx-auto mt-3">
            <div className="card">
                <div className="card-img-top">
                    <img src={props.food.src} alt={props.food.cardTitle} className='img-fluid' />
                </div>
                <div className="card-footer">
                    <h1>{props.food.cardTitle}</h1>
                    <p className="text-muted">{props.food.cardText}</p>
                </div>
            </div>
        </div>
    )
}

export default Card_Top_Foods
