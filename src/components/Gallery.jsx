import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(1)

    const galleryItems = [
        {
            id: 1,
            title: "Fit Women Chatting In Weights Room",
            description: "Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer."
        },
        {
            id: 2,
            title: "Fit People Smiling At Camera In Weights Room",
            description: "Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer."
        },
        {
            id: 3,
            title: "Male Personal Trainer Supporting Woman Working With Heavy",
            description: "Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer."
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev % 3) + 1)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => prev === 1 ? 3 : prev - 1)
    }

    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber)
    }

    return (
        <section className="gallery">
            <div className="gallery-container">
                <div className="gallery-cards">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-card">
                            <div className={`gallery-image image-${item.id}`}></div>
                            <div className="gallery-content">
                                <h3 className="gallery-title">{item.title}</h3>
                                <p className="gallery-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-nav">
                    <div className="nav-dots">
                        {[1, 2, 3].map((dot) => (
                            <button
                                key={dot}
                                className={`nav-dot ${currentSlide === dot ? 'active' : ''}`}
                                onClick={() => goToSlide(dot)}
                            ></button>
                        ))}
                    </div>
                    <div className="nav-arrows">
                        <button className="nav-btn-square prev" onClick={prevSlide}>
                            <ChevronLeft />
                        </button>
                        <button className="nav-btn-square next" onClick={nextSlide}>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
