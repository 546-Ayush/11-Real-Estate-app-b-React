import React, { useState, useEffect } from 'react';
import './WorkPage.css';
import { WorkDetail } from '../Details/WorkDetail';
import Aos from 'aos';
import 'aos/dist/aos.css';


function WorkPage() {
    const [detail, setDetail] = useState(WorkDetail);

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
            easing: 'ease',
        })
    }, [])

    return (
        <>
            <section className="work">
                <div className="overlay"></div>
                <div data-aos="fade-down" className="work_container">
                    <div className="work_heading">
                        <span>Work Flow</span>
                        <h2>How it work</h2>
                    </div>

                    <div className="column1">
                        <div className="work_row">

                            {
                                detail.map((obj) => {
                                    return (
                                        <div className="work_card">
                                            <div className="work_column">
                                                <div className="content">
                                                    <div className="number">
                                                        <span>{obj.number} </span>
                                                    </div>

                                                    <div className="work_content">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkPage