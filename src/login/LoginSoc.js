import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';
export default function LoginSoc() { 
    const [email,setEmail]=useState('');
    const[mdp,setMdp]=useState('');
    
    const handleLogin=(e)=>{
      e.preventDefault();
    
        axios({
          method:"POST",
          url:'http://localhost:5000/LoginSocieteCtlr/loginSociete',
       
       
          data:{
            email,mdp
          },
        })
        .then((res)=>{
          window.location='/PageAccueil';
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
       
        <p className="register-link">Vous n'avez pas de compte ? <a href="/registersc" style={{color:'blue'}}>S'inscrire</a></p>
      </form>
    </div>
  
  )
}



