import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import TestimonialSection from './components/TestimonialSection'
import CompetitionTraining from './components/CompetitionTraining'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChoose />
      <Testimonials />
      <TestimonialSection />
      <CompetitionTraining />
      <Pricing />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
