import React, { useState } from 'react';
import './JobPostingForm.css';

function JobPostingForm() {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Envoyer le formulaire
  }

  return (
    <div className="job-posting-form-wrapper">
      <div className="job-posting-form-container">
        <h1 className="job-posting-form-title">Déposer une offre d'emploi</h1>
        <form className="job-posting-form" onSubmit={handleSubmit}>
          <label className="job-posting-form-label">
            Titre de l'offre :
            <input className="job-posting-form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="job-posting-form-label">
            Entreprise :
            <input className="job-posting-form-input" type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
          </label>
          <label className="job-posting-form-label">
            Lieu :
            <input className="job-posting-form-input" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label className="job-posting-form-label">
            Description :
            <textarea className="job-posting-form-textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <button className="job-posting-form-submit" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default JobPostingForm;
