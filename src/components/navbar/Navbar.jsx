import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../assets/Logo-png 1.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState('English')

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const toggleLanguage = () => {
        setIsLanguageOpen(!isLanguageOpen)
    }

    const selectLanguage = (lang) => {
        setCurrentLanguage(lang)
        setIsLanguageOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/" onClick={closeMenu}>
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </a>
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
                    <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
                    <a href="#how-it-works" className="nav-link" onClick={closeMenu}>How It Works</a>
                    <a href="#contact" className="nav-link" onClick={closeMenu}>Contact Us</a>
                    <a href="#membership" className="nav-link" onClick={closeMenu}>Membership</a>
                </div>
                <div className="navbar-right">
                    <div className="language-selector">
                        <button className="language-btn" onClick={toggleLanguage}>
                            <span className="language-icon">🌐</span>
                            {currentLanguage}
                        </button>
                        <div className={`language-dropdown ${isLanguageOpen ? 'active' : ''}`}>
                            <button
                                className={`language-option ${currentLanguage === 'English' ? 'selected' : ''}`}
                                onClick={() => selectLanguage('English')}
                            >
                                English
                            </button>
                            <button
                                className={`language-option ${currentLanguage === 'العربية' ? 'selected' : ''}`}
                                onClick={() => selectLanguage('العربية')}
                            >
                                العربية
                            </button>
                        </div>
                    </div>
                    <button className="signup-btn">Create Account</button>
                    <button className="login-btn">Login</button>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                </div>
            </div>
        </nav>
    )
}
