import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import footerLogo from "../../../images/logo 1.png";
import "./Footer.css";
const Footer = () => {
    return (
        <div className='container-fluid footer-segment'>

            <div className="container mx-auto p-0 py-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p className='footer-title-txt'>Company</p>
                        <ul className='list-unstyled text-start'>

                            <li className="footer-li"> <Link to="" className='footer-title-link '>About Us</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Why Choose us</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Services</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Testimonial</Link></li>


                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p className='footer-title-txt'>Resources</p>
                        <ul className='list-unstyled text-start'>

                            <li className="footer-li"> <Link to="" className='footer-title-link'>Privacy Policy</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Terms and Condition</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Blog</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                        <p className='footer-title-txt'>Product</p>
                        <ul className='list-unstyled text-start'>

                            <li className="footer-li"> <Link to="" className='footer-title-link'>Project managment</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Time tracker</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Time schedule</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Lead generate</Link></li>
                            <li className="footer-li"> <Link to="" className='footer-title-link'>Remote Collaboration</Link></li>


                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-start pt-3 ps-lg-5  ">
                        <img src={footerLogo} alt="" className='img-fluid pb-3 m-0' />
                        <p className='footer-title-txt'>Subscribe to our Newsletter</p>

                        <div className=''>
                            <input className='subcribe-input ' type="email" placeholder='Enter your Email' />
                            <button className='subscribe-btn mt-2 ' >Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center pt-3">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 ">
                        <hr className='footer-line' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center align-items-center">
                        <p className='copyright-text'>© Copyright /Danapuri 2022</p>
                        <div className='d-flex '>
                            <FaFacebook className='text-secondary social-icon'></FaFacebook>
                            <FaLinkedin className='text-secondary social-icon'></FaLinkedin>
                            <FaTwitter className='text-secondary social-icon'></FaTwitter>
                            <FaInstagram className='text-secondary social-icon'></FaInstagram>

                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 ">
                        <hr className='footer-line' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;