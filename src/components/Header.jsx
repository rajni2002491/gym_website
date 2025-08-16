import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <div className="logo-icon">F.</div>
                </div>
                <div className="header-right">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#workshops">Workshops</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className="header-buttons">
                        <button className="btn btn-register">Register</button>
                        <button className="btn btn-login">Login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
