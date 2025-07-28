import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:amadou.ben.rahim.camara@gmail.com">amadou.ben.rahim.camara@gmail.com</a></p>
          <p><strong>Téléphone:</strong> +226 74 50 56 43</p>
          <p><strong>Adresse:</strong> Bobo-Dioulasso secteur 09 Accart-Ville Sud, Burkina Faso</p>
        </div>
        <h3>Envoyez-moi un message</h3>
        <motion.form 
          onSubmit={handleSubmit} 
          className="contact-form-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Votre message" required></textarea>
          </div>
          <div className="text-center">
            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Envoyer
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

