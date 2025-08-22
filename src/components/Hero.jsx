import React from 'react'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-title-section">
                    <h1 className="hero-title">
                        The Fitness Hub
                    </h1>
                </div>

                <div className="hero-content">
                    <div className="hero-left">
                        <div className="hero-welcome">
                            <p className="hero-tagline">
                                Welcome To Large Fit 415, Your Go-To Large Workout Studio In The San Francisco Bay Area. We're Here To Help The Best Strongest.
                            </p>
                            <button className="btn btn-workshop">Join Our Workshop Now</button>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">290k+</span>
                                <span className="stat-label">Happy Customers</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">175k+</span>
                                <span className="stat-label">Fitness Workshops</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">190+</span>
                                <span className="stat-label">Professional Trainer</span>
                            </div>
                        </div>

                        <div className="hero-app-info">
                            <div className="qr-section">
                                <div className="qr-code"></div>
                                <p>Scan The QR-Code To Download This App</p>
                            </div>

                            <div className="reviews-section">
                                <div className="user-avatars">
                                    <div className="avatar"></div>
                                    <div className="avatar"></div>
                                    <div className="avatar"></div>
                                    <div className="avatar-plus">+</div>
                                </div>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="star filled">★</span>
                                        <span className="star filled">★</span>
                                        <span className="star filled">★</span>
                                        <span className="star filled">★</span>
                                        <span className="star half">★</span>
                                    </div>
                                    <span className="rating-text">4.8/5 Based on 120 Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-center">
                        <img
                            src="/gym_image.png"
                            alt="Muscular man lifting dumbbells"
                            className="fitness-man-img"
                        />
                    </div>

                    <div className="hero-right">
                        <div className="phone-app">
                            <div className="phone-screen">
                                <div className="app-header">
                                    <div className="app-menu">☰</div>
                                    <div className="app-profile"></div>
                                    <div className="app-notification">🔔</div>
                                </div>

                                <div className="app-content">
                                    <div className="progress-section">
                                        <h3>Today's Progress</h3>
                                        <div className="progress-metrics">
                                            <div className="metric">
                                                <span className="metric-value">3831</span>
                                                <span className="metric-label">Steps</span>
                                            </div>
                                            <div className="metric">
                                                <span className="metric-value">2.9 km</span>
                                                <span className="metric-label">Distance</span>
                                            </div>
                                            <div className="metric">
                                                <span className="metric-value">142 Cal</span>
                                                <span className="metric-label">Calories</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="coins-section">
                                        <h3>Coins by walking</h3>
                                        <div className="coins-value">$04.89</div>
                                        <div className="progress-bar"></div>
                                    </div>

                                    <div className="exercises-section">
                                        <h3>Last Exercises</h3>
                                        <div className="exercise-item">
                                            <span className="exercise-icon">🚴</span>
                                            <span className="exercise-name">Chest Dip 15 times</span>
                                            <span className="exercise-date">AUG 17</span>
                                        </div>
                                        <div className="exercise-item">
                                            <span className="exercise-icon">🏋️</span>
                                            <span className="exercise-name">Arnold Press 12 times</span>
                                            <span className="exercise-date">AUG 12</span>
                                        </div>
                                    </div>

                                    <div className="next-round-section">
                                        <h3>Next Round</h3>
                                        <div className="next-exercise">
                                            <span className="exercise-icon">🚴</span>
                                            <span className="exercise-name">Outdoor Cycle 25 min</span>
                                            <div className="group-avatars">
                                                <div className="mini-avatar"></div>
                                                <div className="mini-avatar"></div>
                                                <div className="mini-avatar"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="app-nav">
                                    <div className="nav-icon">🏠</div>
                                    <div className="nav-icon">📊</div>
                                    <div className="nav-icon">🔔</div>
                                    <div className="nav-icon">👤</div>
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
