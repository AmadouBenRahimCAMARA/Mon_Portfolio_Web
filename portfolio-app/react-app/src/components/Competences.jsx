import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaLaravel } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Competences.css';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={50} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={50} /> },
  { name: 'ReactJS', icon: <FaReact size={50} /> },
  { name: 'PHP', icon: <FaPhp size={50} /> },
  { name: 'Laravel', icon: <FaLaravel size={50} /> },
];

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section id="skills">
      <div className="container">
        <h2>Compétences Techniques</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
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
