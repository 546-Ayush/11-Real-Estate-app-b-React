import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <section className="home">
                <div className="container">
                    <h1>We construct <br /> dreams.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, voluptatum sapiente nam possimus minima reprehenderit quisquam ea laudantium alias eveniet?</p>

                    <div className="link">
                        <a href="#" className='explore'>Explore</a>
                        <a href="#" className='contact'>Contact Us</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;