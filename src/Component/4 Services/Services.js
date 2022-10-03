import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Services.css';
import { ServiceDetail } from '../Details/ServiceDetail';

function Services() {
    const [detail, setDetail] = useState(ServiceDetail);

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
            easing: 'ease',
        })
    }, [])

    return (
        <>
            <section data-aos="fade-up" className="services">
                <div className="heading">
                    <span>Our Services</span>
                    <h2>The smartest way to buy home</h2>
                </div>

                <div className="service_row">

                    {
                        detail.map((obj) => {
                            return (
                                <div className="services_card">
                                    <div className="service_column">
                                        <div className="content">
                                            <div className="service_icon">
                                                <img src={obj.Image} alt="icon" />
                                            </div>
                                            <div className="service_content">
                                                <h3>{obj.heading} </h3>
                                                <p>{obj.info} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Services