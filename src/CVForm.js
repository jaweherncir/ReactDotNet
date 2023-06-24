import React, { useState } from 'react';
import './CVForm.css';

function CVForm() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [address, setAddress] = useState('');
const [education, setEducation] = useState('');
const [experience, setExperience] = useState('');

function handleSubmit(event) {
event.preventDefault();
// Envoyer le formulaire
}

return (
<div className="cv-form-wrapper">    
<div className="cv-form-container">
<h1 className="cv-form-title">Formulaire de CV</h1>
<form className="cv-form" onSubmit={handleSubmit}>
<label className="cv-form-label">
Prénom:
<input className="cv-form-input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
</label>
<label className="cv-form-label">
Nom:
<input className="cv-form-input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
</label>
<label className="cv-form-label">
Email:
<input className="cv-form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</label>
<label className="cv-form-label">
Téléphone:
<input className="cv-form-input" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
</label>
<label className="cv-form-label">
Adresse:
<input className="cv-form-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
</label>
<label className="cv-form-label">
Éducation:
<textarea className="cv-form-textarea" value={education} onChange={(e) => setEducation(e.target.value)} />
</label>
<label className="cv-form-label">
Expérience professionnelle:
<textarea className="cv-form-textarea" value={experience} onChange={(e) => setExperience(e.target.value)} />
</label>
<button className="cv-form-submit" type="submit">Envoyer</button>
</form>
</div>
</div>
);
}

export default CVForm;