import React from 'react'
import { Check } from 'lucide-react'

const WhyChoose = () => {
    return (
        <section className="why-choose" id="about">
            <div className="why-choose-container">
                <div className="why-choose-image">
                    <img src="/gym_image2.png" alt="Fitness Training" className="why-choose-img" />
                </div>
                <div className="why-choose-content">
                    <h2 className="why-choose-title">
                        <span className="title-line-1">WHY CHOOSE OUR</span><br />
                        <span className="title-line-2">FITNESS</span>
                    </h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Check />
                            </div>
                            <div className="feature-content">
                                <h3>CLEAN AND SAFE ENVIRONMENT</h3>
                                <p>Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Check />
                            </div>
                            <div className="feature-content">
                                <h3>CUTTING-EDGE EQUIPMENT</h3>
                                <p>And Coach Our Clients To Help Them Achieve Their Unique Weight Loss Or Fitness Goals.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Check />
                            </div>
                            <div className="feature-content">
                                <h3>PROFESSIONAL TRAINERS</h3>
                                <p>Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
