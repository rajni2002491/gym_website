import React from 'react'
import { Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-left">
                        <h2 className="footer-title">Have a great idea</h2>
                        <p className="footer-description">
                            Committed To Fostering Inclusive Learning Environments And Promoting Student Success.
                        </p>
                        <button className="btn btn-connect">Let's Connect</button>
                        <div className="footer-graphic">
                            <div className="abstract-arc"></div>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-menu">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Me</a></li>
                                <li><a href="#services">SERVICES</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <h3>Gate In Taharah</h3>
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>Jibpn052@hotmail.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>Sheffield, united kingdom</span>
                            </div>
                        </div>

                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="#" className="social-icon linkedin">
                                    <Linkedin />
                                </a>
                                <a href="#" className="social-icon twitter">
                                    <Twitter />
                                </a>
                                <a href="#" className="social-icon instagram">
                                    <Instagram />
                                </a>
                                <a href="#" className="social-icon facebook">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
