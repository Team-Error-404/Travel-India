import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Carousel} from 'react-bootstrap'
import top_places from '../assets/data/top_places.js'
import Footer from './Footer'
import Navbar from './Navbar'
function Page_Top_Place(props) {
    let title = props.match.params.place;
    let place = title.replace(/[^a-zA-Z ]/g, "");
    console.log(place);
    let data = top_places[place];
    console.log(data);
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ marginTop: '62' + 'px', paddingTop: '20' + 'px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <Carousel>
                            {data.slides.map(slide => {
                                return (
                                    <Carousel.Item>
                                        <img src={slide} className="d-block w-100" id="img1" alt="alt" />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0 px-4 pt-1" id='rating-container'>
                        <h4 className='text-uppercase'>{title}</h4>
                        <p>{data.text}</p>
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                        // value={rating}
                        // onStarClick={onStarClick}
                        />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6">
                        <section className="py-3 text-center">
                            <iframe src={data.map} width='100%' height="300" style={{ border: "0" }} aria-hidden="false" tabIndex="0">Your browser doesn't support Map</iframe>
                        </section>
                    </div>
                    <div className="col-md-6">
                        <section className="py-3 text-center">
                            <iframe src={data._3dview} width='100%' height="300" style={{ border: "0" }} aria-hidden="false" tabIndex="0">Your browser doesn't support Map</iframe>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page_Top_Place
