import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaTv, FaRunning } from 'react-icons/fa'; // FaTv pour les séries

const LanguagesInterests = () => {
  const interests = [
    { name: 'Musique', icon: <FaMusic size={60} /> },
    { name: 'Séries', icon: <FaTv size={60} /> },
    { name: 'Sports', icon: <FaRunning size={60} /> },
  ];

  return (
    <section id="hobbies">
      <div className="container">
        <h2>Mes Hobbies</h2>
        
        <div className="hobbies-horizontal-display"> {/* Nouvelle classe pour l'affichage horizontal */}
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="hobby-item" // Nouvelle classe pour les éléments individuels
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.15, rotate: Math.random() * 30 - 15 }} // Rotation aléatoire au survol
              whileTap={{ scale: 0.9 }}
            >
              {interest.icon}
              <p>{interest.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesInterests;
