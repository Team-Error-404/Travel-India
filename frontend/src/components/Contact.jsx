import React from 'react'
import '../assets/css/contact.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    return (
        <>
            <Navbar />
            <section id="contact" className="container">
                <h1>Contact us</h1>
                <div id="main">
                    <section id="map" className="pt-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.9532054120286!2d85.73360411425308!3d20.219265486442467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8fa59ac3c81%3A0xc81fc475faa77274!2sC.%20V.%20Raman%20Global%20University!5e0!3m2!1sen!2sin!4v1608410611243!5m2!1sen!2sin" width="400" height="300" style={{ border: "0" }} aria-hidden="false" tabIndex="0">Your browser doesn't support Map</iframe>
                    </section>
                    <section id="details">
                        <h2>Having Queries? </h2>
                        <p>Are You planning your trip? Do having some Queries? No problem, we are always ready to help you out. Feel free to contact us.</p>
                        <h2>Reach us at</h2>
                        <p><a href="tel:+918113445678">Phone: +91 811 344 5678</a></p>
                        <p><a href="tel:+916523412365">Phone: +91 652 341 2365</a></p>
                        <p>
                            Email : <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=assist.travelindia@gmail.com&tf=1" id="email">assist.travelindia@gmail.com</a>
                        </p>
                        <h2>Connect with us</h2>
                        <div id="social" className="text-center">
                            <a href="#" id="social-facebook"><FaFacebookF size={25} className="mt-2 text-light" /></a>
                            <a href="#" id="social-twitter"><FaTwitter size={25} className="mt-2 text-light" /></a>
                            <a href="#" id="social-instagram"><FaInstagram size={25} className="mt-2 text-light" /></a>
                        </div>
                    </section >
                </div >
            </section >
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Contact