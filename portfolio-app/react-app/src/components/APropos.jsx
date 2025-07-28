import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <motion.div 
        className="about-content container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1>RAHIM CAMARA</h1>
        <img src="/photo.jpg" alt="RAHIM CAMARA" className="profile-picture" />
        <TypeAnimation
          sequence={[
            'Développeur Full-Stack en freelance',
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
    </section>
  );
};

export default About;
