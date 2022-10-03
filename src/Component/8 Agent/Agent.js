import React, { useState } from 'react';
import './Agent.css';
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import { AgentDetail } from '../Details/AgentDetails';

function Agent() {
    const [detail, setDetail] = useState(AgentDetail);

    return (
        <>
            <section className="agent">
                <div className="agent_heading">
                    <span>Agents</span>
                    <h2>Our Agents</h2>
                </div>

                <div className="agent_row">
                    {
                        detail.map((obj) => {
                            return (
                                <div className="agent_column">
                                    <div className="agent_card">
                                        <div className="agent_thumb">
                                            <img src={obj.Image} alt="agent" />

                                            <div className="social_link">
                                                <ul>
                                                    <li>
                                                        <a href="#"><GrFacebook className='icons' /> </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><GrTwitter className='icons' /> </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><GrInstagram className='icons' /> </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="agent_info">
                                            <h3>{obj.name} </h3>
                                            <p>{obj.info} </p>
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

export default Agent