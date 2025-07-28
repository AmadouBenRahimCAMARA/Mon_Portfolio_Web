import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header-nav">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="logo">RAHIM CAMARA</a>
          </div>
          <div className="nav-links hidden md:block">
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#formation">Formation</a></li>
              <li><a href="#hobbies">Mes Hobbies</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="mobile-menu-button md:hidden">
            <button onClick={toggleMenu} type="button" aria-controls="mobile-menu" aria-expanded={isOpen ? "true" : "false"}>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`mobile-menu md:hidden ${isOpen ? 'open' : ''}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" onClick={toggleMenu}>À propos</a>
          <a href="#skills" onClick={toggleMenu}>Compétences</a>
          <a href="#projects" onClick={toggleMenu}>Projets</a>
          <a href="#formation" onClick={toggleMenu}>Formation</a>
          <a href="#hobbies" onClick={toggleMenu}>Mes Hobbies</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;