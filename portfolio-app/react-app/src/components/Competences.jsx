import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiPostgresql, SiUml } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={60} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={60} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={60} /> },
  { name: 'ReactJS', icon: <FaReact size={60} /> },
  { name: 'PHP', icon: <FaPhp size={60} /> },
  { name: 'Laravel', icon: <FaLaravel size={60} /> },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Compétences Techniques</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{
                opacity: 0,
                y: Math.random() * 100 - 50, // Décalage Y aléatoire entre -50 et 50
                x: Math.random() * 100 - 50, // Décalage X aléatoire entre -50 et 50
                rotate: Math.random() * 40 - 20, // Rotation aléatoire entre -20 et 20 degrés
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08, type: "spring", stiffness: 80, damping: 10 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.15, rotate: Math.random() * 30 - 15 }} // Rotation aléatoire au survol
              whileTap={{ scale: 0.9 }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
