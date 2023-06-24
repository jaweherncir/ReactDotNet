import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterSocieteForm.css';
import axios from 'axios';
function RegisterCondidat() {
  const [nom, setNom] = useState('');
 const [prenom, setPrenom] = useState('');
  const [contact, setContact ]= useState('');
  const [dateDenaisance, setDateDenaisance] = useState('');
  const [mdp, setMdps] = useState('');

  const register=(e)=>{
    e.preventDefault();
    
      axios({
        method:"POST",
        url:'http://localhost:5000/RegistryCandidatCtlr/AddCandidat',
        data:{
          nom,
          prenom,
          contact,
           mdp,
           dateDenaisance
        },
      })
      .then((res)=>{
        console.log(res);
        if(res.data.errors)
        {
      
          console.log(res.data);
        }
        else{window.location='/AvisJobs'; }

      })
      .catch((err)=>{
        console.log(err)
      
      })
  };

  return (
    <div className="registration-page1"style={{marginTop:'5%'}} >
      <form className="registration-form-societe" >
        <h2 className="form-title">Formulaire d'inscription - condidat</h2>
        <div className="form-input2">
          <label htmlFor="companyName" className="form-label2">Nom Condidat:</label>
          <input
            className="form-input-text"
            type="text"
            id="companyName"
            onChange={(e)=>setNom(e.target.value)} 
            value={nom}
          />
        </div>
        <div className="form-input2">
          <label htmlFor="companyName" className="form-label2">Prénom Condidat:</label>
          <input
            className="form-input-text"
            type="text"
            id="companyName"
            onChange={(e)=>setPrenom(e.target.value)} 
            value={prenom}
          />
        </div>
        <div className="form-input2">
          <label htmlFor="companyName" className="form-label2">Date Naissance Condidat:</label>
          <input
            className="form-input-text"
            type="text"
            id="companyName"
            onChange={(e)=>setDateDenaisance(e.target.value)} 
            value={dateDenaisance}
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
            value={mdp}
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
export default RegisterCondidat ;






















