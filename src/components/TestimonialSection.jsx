import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const testimonials = [
        {
            name: "Jacob Jones",
            role: "Member",
            rating: 4,
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
        <section className="testimonial-section">
            <div className="testimonial-section-container">
                <div className="testimonial-section-content">
                    <div className="testimonial-section-left">
                        <div className="testimonial-section-image">
                            <img src="/gym_image3.png" alt="Jacob Jones lifting weights" className="jacob-jones-img" />
                        </div>
                    </div>
                    <div className="testimonial-section-right">
                        <div className="quote-mark-large">"</div>
                        <div className="testimonial-section-details">
                            <h3 className="testimonial-section-name">{testimonials[currentTestimonial].name}</h3>
                            <span className="testimonial-section-role">{testimonials[currentTestimonial].role}</span>
                            <div className="testimonial-section-rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`star ${i < testimonials[currentTestimonial].rating ? 'filled' : ''}`}
                                    />
                                ))}
                            </div>
                            <p className="testimonial-section-text">{testimonials[currentTestimonial].text}</p>
                        </div>
                        <div className="testimonial-section-nav">
                            <button className="nav-btn-circle prev" onClick={prevTestimonial}>
                                <ChevronLeft />
                            </button>
                            <button className="nav-btn-circle next" onClick={nextTestimonial}>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
