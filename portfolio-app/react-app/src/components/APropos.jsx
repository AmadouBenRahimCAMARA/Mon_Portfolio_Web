import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './APropos.css';

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="about-content container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/photo.jpg" alt="RAHIM CAMARA" className="profile-picture" />
        <h1>RAHIM CAMARA</h1>
        <TypeAnimation
          sequence={[
            'Développeur Full-Stack',
            1500,
            'Passionné de technologies',
            1500,
            'Créateur de solutions web',
            1500,
          ]}
          wrapper="h2"
          className="type-animation"
          repeat={Infinity}
        />
        <p>
          Étudiant en fin de licence informatique, passionné par le développement web et mobile.
          Je suis enthousiaste pour vous accompagner dans vos besoins de digitalisation et pour transformer vos idées en solutions numériques.
        </p>
      </motion.div>
      <div className="scroll-down-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
