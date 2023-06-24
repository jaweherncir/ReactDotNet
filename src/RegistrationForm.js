import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Registration form submitted');
  }
  function handleGoogleSignIn() {
    // Handle Google sign-in logic here
  }

return (
<div className="registration-page">
<form className="registration-form" onSubmit={handleSubmit}>
<h2 className="form-title">Inscrit</h2>
<div className="form-input1">
<label htmlFor="firstName" className="form-label">Nom:</label>
<input
type="text"
id="firstName"
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
className="form-control"
/>
</div>
<div className="form-input1">
<label htmlFor="lastName" className="form-label">Prenom:</label>
<input
type="text"
id="lastName"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
className="form-control"
/>
</div>
<div className="form-input1">
<label htmlFor="gender" className="form-label">Gender:</label>
<select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="form-control">
<option value="">genre</option>
<option value="male">Homme</option>
<option value="female">Femme</option>
</select>
</div>
<div className="form-input1">
<label htmlFor="email" className="form-label">Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="form-control"
/>
</div>
<div className="form-input1">
<label htmlFor="password" className="form-label">Mot de passe:</label>
<input
type="password"
id="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="form-control"
/>
</div>
<div className="form-input1">
<label htmlFor="confirmPassword" className="form-label">Confirmez mot de passe:</label>
<input
type="password"
id="confirmPassword"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
className="form-control"
/>
</div>
<div className="form-input1">
<label htmlFor="birthdate" className="form-label">Date de naissance:</label>
<input
type="date"
id="birthdate"
value={birthdate}
onChange={(e) => setBirthdate(e.target.value)}
className="form-control"
/>
</div>
<div className="form-input1">
<button type="submit" className="form-button">Enregister</button>

        
<p className="form-text">
Déjà un compte? . <Link to="/login" className="form-link">Connectez-vous ici</Link>.
</p>
</div>
</form>
</div>
);
}

export default RegistrationForm;