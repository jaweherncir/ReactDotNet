import React, { useState } from 'react';
import './JobApplicationForm.css';

function JobApplicationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Envoyer le formulaire
  }

  return (
    <div className="job-application-form-wrapper">
      <div className="job-application-form-container">
        <h1 className="job-application-form-title">Postuler pour l'offre d'emploi</h1>
        <form className="job-application-form" onSubmit={handleSubmit}>
          <label className="job-application-form-label">
            Prénom:
            <input className="job-application-form-input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label className="job-application-form-label">
            Nom:
            <input className="job-application-form-input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label className="job-application-form-label">
            Email:
            <input className="job-application-form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="job-application-form-label">
            Téléphone:
            <input className="job-application-form-input" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <label className="job-application-form-label">
            CV:
            <input className="job-application-form-file-input" type="file"value={resume} onChange={(e) => setResume(e.target.files[0])} />
          </label>
          <button className="job-application-form-submit" type="submit">Postuler</button>
        </form>
      </div>
    </div>
  );
}

export default JobApplicationForm;
