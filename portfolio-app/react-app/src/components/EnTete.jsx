import React, { useState, useEffect } from 'react';
import './EnTete.css'; // Import the new CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 200) { // if scroll down hide the navbar
        setIsHeaderVisible(false);
      } else { // if scroll up show the navbar
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header-nav ${isHeaderVisible ? 'top-0' : '-top-full'}`}>
      <div className="container">
        <a href="#" className="logo">RAHIM CAMARA</a>
        <div className="nav-links">
          <ul>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <button onClick={toggleMenu} type="button" className="mobile-menu-button" aria-controls="mobile-menu" aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
          </svg>
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <a href="#" className="logo">RAHIM CAMARA</a>
          <button onClick={toggleMenu} type="button">
            <span className="sr-only">Close main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mobile-menu-links">
          <a href="#projects" onClick={toggleMenu}>Projets</a>
          <a href="#skills" onClick={toggleMenu}>Compétences</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
