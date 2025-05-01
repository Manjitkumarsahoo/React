import React from 'react';
import '../css/home.css';
import user1 from '../assets/user1.jpg'; 
import user2 from '../assets/user2.jpg'; 

function Home(){
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Connecting <span>Top Talent</span> with Leading Companies</h1>
                    <p>Work Force - Today helps businesses find the perfect candidates and professionals discover their dream careers.</p>
                    <button>Get in Touch</button>
                </div>
                <div className="hero-images">
                    <img src={user1} alt="Professional man" className="img1"/>
                    <img src={user2} alt="Professional woman" className="img2"/>
                </div>
            </div>
        </section>
    );
};

export default Home;
