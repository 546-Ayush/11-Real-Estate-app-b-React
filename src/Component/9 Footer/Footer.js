import React from 'react';
import './Footer.css';
import { BsArrowRight } from "react-icons/bs";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";


function Footer() {
    return (
        <>
            <section className="footer">
                <div className="footer_container">
                    <div className="footer_row">

                        {/* Column-1 */}
                        <div className="footer_column">
                            <div className="column_content">
                                <h2>DownTown</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, labore excepturi, laboriosam neque nisi libero.</p>

                                <ul className="footer_link">
                                    <li><GrFacebook className='icons' /> </li>
                                    <li><GrTwitter className='icons' /> </li>
                                    <li><GrInstagram className='icons' /> </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column-2 */}
                        <div className="footer_column">
                            <div className="column_content">
                                <h2>Community</h2>

                                <ul >
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Search properties
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            For Agents
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column-3 */}
                        <div className="footer_column">
                            <div className="column_content">
                                <h2>About us</h2>

                                <ul >
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Our Story
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Meet the Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column-4 */}
                        <div className="footer_column">
                            <div className="column_content">
                                <h2>Company</h2>

                                <ul >
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Our Story
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Press
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span> <BsArrowRight className='arrow_icon' /> </span>
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column-5 */}
                        <div className="footer_column">
                            <div className="column_content">
                                <h2>Have a Question?</h2>

                                <ul >
                                    <li>
                                        <span className="footer_icon"><MdLocationOn /> </span>
                                        <span className="text">Golf St. Lake View, San Francisco, California, USA</span>
                                    </li>
                                    <li>
                                        <span className="footer_icon"><MdLocalPhone /></span>
                                        <span className="text">+2 292 2088 234</span>
                                    </li>
                                    <li>
                                        <span className="footer_icon"><MdEmail /> </span>
                                        <span className="text">info@yourdomain.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                    <div className="footer_2">
                        <div className="footer_2_container">
                            <p>Copyright @2022 All rights reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer