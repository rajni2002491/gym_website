import React from 'react'
import { Star, Download } from 'lucide-react'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            FITNES
                            <span className="title-image">I</span>
                            FUSIO
                            <span className="title-image">N</span>
                        </h1>
                        <p className="hero-tagline">
                            Welcome To Large Fit 415, Your Go-To Large Workout Studio In The San Francisco Bay Area. We're Here To Help The Best Strongest.
                        </p>
                        <button className="btn btn-workshop">Join Our Workshop Now</button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">290k+</span>
                            <span className="stat-label">Happy Customers</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">175k+</span>
                            <span className="stat-label">Fitness Workshops</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">190+</span>
                            <span className="stat-label">Professional Trainer</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="qr-section">
                        <div className="qr-code">
                            <div className="qr-placeholder"></div>
                        </div>
                        <p className="qr-text">Scan The QR-Code To Download This App</p>
                    </div>

                    <div className="reviews-section">
                        <div className="review-avatars">
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar-plus">+</div>
                        </div>
                        <div className="rating">
                            <span className="rating-score">4.8/5</span>
                            <div className="stars">
                                <Star className="star filled" />
                                <Star className="star filled" />
                                <Star className="star filled" />
                                <Star className="star filled" />
                                <Star className="star half" />
                            </div>
                        </div>
                        <p className="review-count">Based on 120 Reviews</p>
                    </div>
                </div>

                <div className="hero-main-image">
                    <div className="fitness-man"></div>
                    <div className="phone-app">
                        <div className="phone-screen">
                            <div className="app-header">
                                <div className="menu-icon"></div>
                                <div className="profile-icon"></div>
                                <div className="bell-icon"></div>
                            </div>
                            <div className="app-content">
                                <div className="progress-section">
                                    <div className="steps">
                                        <span className="steps-number">3831</span>
                                        <span className="steps-text">Steps</span>
                                    </div>
                                    <div className="distance">2.9 km</div>
                                    <div className="calories">142 Cal</div>
                                </div>
                                <div className="coins-section">
                                    <span className="coins-text">Coins by walking</span>
                                    <span className="coins-amount">$04.89</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                </div>
                                <div className="exercises-section">
                                    <h4>Last Exercises</h4>
                                    <div className="exercise-item">
                                        <div className="exercise-icon"></div>
                                        <span className="exercise-name">Chest Dip</span>
                                        <span className="exercise-count">15 times</span>
                                        <span className="exercise-date">AUG 17</span>
                                    </div>
                                    <div className="exercise-item">
                                        <div className="exercise-icon"></div>
                                        <span className="exercise-name">Arnold Press</span>
                                        <span className="exercise-count">12 times</span>
                                        <span className="exercise-date">AUG 12</span>
                                    </div>
                                </div>
                                <div className="next-round">
                                    <h4>Next Round</h4>
                                    <div className="next-exercise">
                                        <div className="bike-icon"></div>
                                        <span className="exercise-name">Outdoor Cycle</span>
                                        <span className="exercise-time">25 min</span>
                                    </div>
                                </div>
                                <div className="app-nav">
                                    <div className="nav-icon home"></div>
                                    <div className="nav-icon chart"></div>
                                    <div className="nav-icon bell"></div>
                                    <div className="nav-icon profile"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
