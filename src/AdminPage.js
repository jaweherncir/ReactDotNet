import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminPage() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    if (email === 'admin' && motDePasse === 'admin') {
        navigate('/admin');
    } else if (email === 'recruiter' && motDePasse === 'recruiter') {
        navigate('/recruiter');
    } else if (email === 'candidate' && motDePasse === 'candidate') {
        navigate('/candidate');
    } else {
      alert('Adresse email ou mot de passe incorrect');
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleLogin();
    }
  }

  function handleGoogleLogin() {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = 'YOUR_CLIENT_ID_HERE';
    const redirectUri = 'http://localhost:3000/oauth2/redirect';
    const responseType = 'code';
    const scope = 'https://www.googleapis.com/auth/userinfo.email';

    const authUrl = `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = authUrl;
  }
  return (
    <div className="login-page">
    <form className='login-container'>
      <h2 className="login-heading">Connexion</h2>
      <div className="form-field">
        <label className="form-label">Adresse email :</label>
        <input className="form-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-field">
        <label className="form-label">Mot de passe :</label>
        <input className="form-input" type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} onKeyDown={handleKeyPress} />
      </div>
      <button className="login-button" type="button" onClick={handleLogin}>Se connecter</button>
     
      <p className="register-link">Vous n'avez pas de compte ? <a href="/register">S'inscrire</a></p>
    </form>
  </div>
  );
}

export default AdminPage;
