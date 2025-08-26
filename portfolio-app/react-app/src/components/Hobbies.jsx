import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaTv, FaRunning } from 'react-icons/fa';
import './Hobbies.css';

const LanguagesInterests = () => {
  const interests = [
    { name: 'Musique', icon: <FaMusic size={50} /> },
    { name: 'Séries', icon: <FaTv size={50} /> },
    { name: 'Sports', icon: <FaRunning size={50} /> },
  ];

  return (
    <section id="hobbies">
      <div className="container">
        <h2>Mes Hobbies</h2>
        <div className="hobbies-horizontal-display">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="hobby-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
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