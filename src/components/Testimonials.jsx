import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const testimonials = [
        {
            name: "Jacob Jones",
            role: "Member",
            rating: 4.5,
            text: "Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer Is The Safest And Most Effective Way To Achieve Your Health And Fitness Goals. Health And Fitness Programs Help Them. We Understand That Your Health And Fitness Goals Are Unique And Should Be Based On Your Specific Needs. For The Last 15 Years"
        }
    ]

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">WHAT OUT HAPPY CLIENTS SAY ABOUT US</h2>
                    <p className="testimonials-intro">
                        Welcome To Lagree Fit 415, Your Go-To Lagree Workout Studio In The San Francisco Bay Area. We're Here To Help You Become The Best And Strongest
                    </p>
                </div>

                <div className="testimonial-content">
                    <div className="quote-mark">"</div>
                    <div className="testimonial-main">
                        <div className="testimonial-image">
                            <div className="bodybuilder-lifting"></div>
                        </div>
                        <div className="testimonial-details">
                            <div className="client-info">
                                <h3 className="client-name">{testimonials[currentTestimonial].name}</h3>
                                <span className="client-role">{testimonials[currentTestimonial].role}</span>
                            </div>
                            <div className="client-rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`star ${i < Math.floor(testimonials[currentTestimonial].rating) ? 'filled' : i < testimonials[currentTestimonial].rating ? 'half' : ''}`}
                                    />
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
                        </div>
                        <div className="small-avatar">
                            <div className="avatar-image"></div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-nav">
                    <button className="nav-btn prev" onClick={prevTestimonial}>
                        <ChevronLeft />
                    </button>
                    <button className="nav-btn next" onClick={nextTestimonial}>
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
