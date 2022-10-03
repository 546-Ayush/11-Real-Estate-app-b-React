import React, { useState } from 'react';
import CountUp from 'react-countup';
import './Counter.css';
import VisibilitySensor from 'react-visibility-sensor';


function Counter({ className, ...rest }) {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <>
            <section className="counter">
                <div className="counter_container">
                    <div className="counter_row">


                        {/*  Column-1 */}
                        <div className="counter_column">
                            <strong>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={305} >
                                    {({ countUpRef }) => {
                                        return (
                                            <VisibilitySensor
                                                active={!viewPortEntered}
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setViewPortEntered(true)
                                                    }
                                                }}
                                                delayedCall
                                            >
                                                <span className="counter_number" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }}
                                </CountUp>
                            </strong>
                            <span>Area <br />Population </span>
                        </div>

                        {/*  Column-2 */}
                        <div className="counter_column">
                            <strong>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={1024} >
                                    {({ countUpRef }) => {
                                        return (
                                            <VisibilitySensor
                                                active={!viewPortEntered}
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setViewPortEntered(true)
                                                    }
                                                }}
                                            >
                                                <span className="counter_number" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }}
                                </CountUp>
                            </strong>
                            <span>Total<br />Properties </span>
                        </div>

                        {/*  Column-3 */}
                        <div className="counter_column">
                            <strong>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={206} >
                                    {({ countUpRef }) => {
                                        return (
                                            <VisibilitySensor
                                                active={!viewPortEntered}
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setViewPortEntered(true)
                                                    }
                                                }}
                                            >
                                                <span className="counter_number" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }}
                                </CountUp>
                            </strong>
                            <span>Average <br />House </span>
                        </div>

                        {/*  Column-4 */}
                        <div className="counter_column">
                            <strong>
                                <CountUp {...rest} start={viewPortEntered ? null : 0} end={27} >
                                    {({ countUpRef }) => {
                                        return (
                                            <VisibilitySensor
                                                active={!viewPortEntered}
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setViewPortEntered(true)
                                                    }
                                                }}
                                            >
                                                <span className="counter_number" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }}
                                </CountUp>
                            </strong>
                            <span>Total <br />Branches </span>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter