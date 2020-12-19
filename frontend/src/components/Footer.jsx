import React from 'react'
import {FaFacebookF, FaTwitter,FaInstagram} from 'react-icons/fa'
import "../assets/css/footer.css"
const Footer = () => {
  return (
    <footer class="contianer  pt-5">
      <section id="main" className="px-5">
      <div id="footer-coloumn1" class="col-lg-4 col-sm-12 coloumn">
        <h4>ABOUT US</h4>
        <p>Our mission is to create a trustable platform for travellers and a way to let all know about indian culture.</p>
      </div>
      <div id="footer-coloumn2" class="col-lg-4 col-sm-12 coloumn pl-2">
        <h4>QUICK LINKS</h4>
        <ul>
          <li><a href="#destinations">Featured destinations</a></li>
          <li><a href="#shorcuts">Make Bookings</a></li>
          <li><a href="#">Covid Cases in Mysuru</a></li>
          <li><a href="#">Contact us </a></li>
        </ul>
      </div>
      <div id="footer-coloumn3" class="col-lg-4 col-sm-12 coloumn">
        <h4>CONTACT US</h4>
        <div>
          <p>Phone : <span class="contact-detail">08064744188</span></p>
          <p>Phone : <span class="contact-detail">08064744188</span></p>
          <p>
            Email : <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indiatourism@gmail.com&tf=1" id="email">indiatourism@gmail.com</a>
          </p>
        </div>
        <div id="social">
          <a href="#" id="social-facebook"><FaFacebookF size={25} className="mt-2 text-light"/></a>
          <a href="#" id="social-twitter"><FaTwitter size={25} className="mt-2 text-light"/></a>
          <a href="#" id="social-instagram"><FaInstagram size={25} className="mt-2 text-light"/></a>
        </div>
      </div>
      </section>
      <section id="copyright">
      <small>&copy; 2020 Error 404</small>
      </section>
    </footer> 
  )
}

export default Footer
