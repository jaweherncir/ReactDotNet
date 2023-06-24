import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code pour envoyer le message à la boîte mail du recruteur
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h1 className="contact-form-title">Contacter le recruteur</h1>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-input-group">
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="contact-form-input-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="contact-form-input-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-form-submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
