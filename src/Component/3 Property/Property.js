import React, { useState } from 'react';
import './Property.css';
import { ImLocation } from "react-icons/im";
import { PropertyDetail } from '../Details/PorpertyDetail';


function Property() {
    const [detail, setDetail] = useState(PropertyDetail);

    return (
        <>
            <section className="property">
                <div className="center">
                    <h3>Popular properties</h3>

                    <div className="row">

                        {
                            detail.map((obj) => {
                                return (
                                    <div className="column">
                                        <div className="single_property">
                                            <div className="card">

                                                <div className="property_thumb">
                                                    <div className="property_tag">For Sale</div>
                                                    <img src={obj.Image} alt="Palace" />
                                                </div>

                                                <div className="property_content">
                                                    <h3>{obj.heading} </h3>
                                                    <div className="mark">
                                                        <ImLocation className='location_icon' />
                                                        <span>{obj.span} </span>
                                                    </div>
                                                    <span className="amount">{obj.amount} </span>
                                                </div>

                                                <div className="property_footer">
                                                    <ul>
                                                        <li>
                                                            <span>{obj.size} </span>
                                                        </li>
                                                        <li>
                                                            <img src={obj.bedImage} alt="bed" />
                                                            <span>{obj.bed} </span>
                                                        </li>
                                                        <li>
                                                            <img src={obj.bathImage} alt="bath" />
                                                            <span>{obj.bath} </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="more_property">
                    <a href="#" className="property_btn">More Properties</a>
                </div>
            </section>
        </>
    )
}

export default Property