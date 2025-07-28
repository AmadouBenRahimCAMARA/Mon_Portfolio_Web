import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Amadou Ben Rahim CAMARA. Tous droits réservés.</p>
        <div className="footer-social-links">
          <a href="https://github.com/AmadouBenRahimCAMARA" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/amadou-ben-rahim-camara-78579635a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
