import axios from 'axios';
import React, { useState } from 'react';

import './LoginPage.css';
export default function LoginCondidat() {
  const [email,setEmail]=useState('');
  const[mdp,setMdp]=useState('');
  
  const handleLogin=(e)=>{
    e.preventDefault();
  
      axios({
        method:"POST",
        url:'http://localhost:5000/LoginCandidatCtlr/loginCandidat',
         
        data:{
          email,mdp
        },
      })
      .then((res)=>{
        localStorage.setItem('userId', JSON.stringify(res.data.id));
        window.location='/AvisJobs';
   console.log(res.data.response)
       
      })
      .catch((error)=>{
        if (error.response) {
          console.log(error.response.data); // Error response data from the server
         alert(error.response.data)
        } else {
          console.log(error); // Request error
          // Handle request error
        }
      })
  };

  return (
    <div className="login-page">
      <form className='login-container'>
        <h2 className="login-heading">Connexion</h2>
        <div className="form-field">
          <label className="form-label">Adresse email :</label>
          <input className="form-input" type="text"
              onChange={(e)=>setEmail(e.target.value)} 
              value={email}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Mot de passe :</label>
          <input className="form-input" type="password"
            onChange={(e)=>setMdp(e.target.value)} 
            value={mdp}
          />
        </div>
        <button className="login-button" type="button"onClick={handleLogin} >Se connecter</button>
       
        <p className="register-link">Vous n'avez pas de compte ? <a href="/RegisterCondidat" style={{color:'blue'}}>S'inscrire</a></p>
      </form>
    </div>
  )
}
