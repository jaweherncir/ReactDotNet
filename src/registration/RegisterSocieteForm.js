import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterSocieteForm.css';
import axios from 'axios';
function RegisterSocieteForm() {
  const [nom, setNom] = useState('');
  
  const [domaine, setDomaine] = useState('');
  const [adresse, setAdresse] = useState('');
  const [contact, setContact] = useState('');
  const [mdpS, setMdps] = useState('');

  const register=(e)=>{
    e.preventDefault();
    
      axios({
        method:"POST",
        url:'http://localhost:5000/RegistrySocieteCtlr/AddSociete',
        data:{
          nom,domaine,mdpS,adresse,contact
        },
      })
      .then((res)=>{
        console.log(res);
        if(res.data.errors)
        {
      
          console.log(res.data);
        }
        else{window.location='/PageAccueil'; }

      })
      .catch((err)=>{
        console.log(err)
      
      })
  };

  return (
    <div className="registration-page1"style={{marginTop:'5%'}} >
      <form className="registration-form-societe" >
        <h2 className="form-title">Formulaire d'inscription - Société</h2>
        <div className="form-input2">
          <label htmlFor="companyName" className="form-label2">Nom de la société:</label>
          <input
            className="form-input-text"
            type="text"
            id="companyName"
            onChange={(e)=>setNom(e.target.value)} 
            value={nom}
          />
        </div>
        <div className="form-input2">
          <label htmlFor="email" className="form-label2">Email:</label>
          <input
            className="form-input-text"
            type="email"
            id="email"
            onChange={(e)=>setContact(e.target.value)} 
            value={contact}
          />
        </div>
        <div className="form-input2">
          <label htmlFor="password" className="form-label2">Mot de passe:</label>
          <input
            className="form-input-text"
            type="password"
            id="password"
            onChange={(e)=>setMdps(e.target.value)} 
            value={mdpS}
          />
        </div>
    
      
        <div className="form-input2">
          <label htmlFor="domaine" className="form-label2">Domaine de travail:</label>
          <input
            className="form-input-text"
            type="text"
            id="domaine"
            onChange={(e)=>setDomaine(e.target.value)} 
            value={domaine}
          />
        </div>
        <div className="form-input2">
          <label htmlFor="adresse" className="form-label2">Adresse:</label>
          <input
            className="form-input-text"
            type="text"
            id="adresse"
            onChange={(e)=>setAdresse(e.target.value)} 
            value={adresse}
          />
        </div>
      

        <div className="form-input2">
          <button type="submit" onClick={register}>S'inscrire</button>
          <p>
            Déjà un compte? <Link to="/login">Connectez-vous ici</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}
export default RegisterSocieteForm ;















