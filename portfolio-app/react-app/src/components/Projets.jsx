import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Gestion de tontines',
    description: 'Une plateforme de gestion de tontines en ligne, permettant aux utilisateurs de créer, rejoindre et gérer des groupes de tontine de manière simple et sécurisée.',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'CSS'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/1E293B/E2E8F0?text=Projet+Tontines', // Placeholder image
  },
  {
    title: 'Portfolio Personnel',
    description: 'Ce site web que vous êtes en train de consulter ! Développé pour présenter mes compétences et mes projets de manière interactive et moderne.',
    technologies: ['React', 'CSS', 'Framer Motion'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/1E293B/E2E8F0?text=Mon+Portfolio', // Placeholder image
  },
  // Ajoutez d'autres projets ici
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 191, 255, 0.4)" }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
