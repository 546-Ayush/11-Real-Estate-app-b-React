import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import './Accordion.css';
import { ImCircleUp, ImCircleDown } from "react-icons/im";
import { AccordionDetail } from '../Details/AccordionDetail';
import pic from './men-bg-image.jpg'


function Accordion() {
    const [detail, setDetail] = useState(AccordionDetail);

    return ( 
        <>
            <section className="accordion">
                <div className="accordion_row">
                    <div className="left">
                        <h3>Frequently Asked Question?</h3>

                        {
                            detail.map((obj) => {
                                return (
                                    <div className="left_content">
                                        <Collapsible
                                            className='collapsible'
                                            trigger={[<ImCircleDown className='down_icon icons' />, obj.question]}
                                            triggerWhenOpen={[<ImCircleUp className='up_icon icons' />, obj.question]}
                                        >
                                            <p className="content_show">
                                                {obj.answer}
                                            </p>
                                        </Collapsible>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="right">
                        <img src={pic} alt="person" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Accordion