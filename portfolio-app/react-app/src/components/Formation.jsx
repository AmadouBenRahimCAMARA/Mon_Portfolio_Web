import React from 'react';
import { motion } from 'framer-motion';

const Formation = () => {
  return (
    <section id="formation">
      <div className="container">
        <h2>Formation</h2>
        <motion.div
          className="formation-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>Licence en Ingénierie des Systèmes d'Information</h3>
          <p className="university">Université Nazi Boni - Campus de Bobo-Dioulasso</p>
          <p>Description de la formation, compétences acquises, etc.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;
