import React from 'react'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-title-section">
                    <h1 className="hero-title">The Fitness Hub</h1>
                </div>

                <div className="hero-content-section">
                    <div className="hero-text">
                        <p className="hero-tagline">
                            Welcome To Large Fit 415, Your Go-To Large Workout Studio In The San Francisco Bay Area. We're Here To Help The Best Strongest.
                        </p>
                    </div>
                    <div className="hero-button">
                        <button className="btn btn-workshop">Join Our Workshop</button>
                    </div>
                </div>

                <div className="hero-image-section">
                    <div className="gym-image"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
