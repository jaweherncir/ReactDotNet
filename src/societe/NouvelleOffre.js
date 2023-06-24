import './condidature.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function NouvelleOffre() {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      // Envoyer le formulaire
    }
  return (
    <div>
   {/* Preloader Start */}
   <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                {/* Logo */}
                <div className="logo">
                <Link to="/" className="navbar-brand" style={{color:'black'}}><img src="/assets/img/logo/logo-no-background.png"  style={{width:200}} alt /></Link>
                </div>  
                
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  {/* Main-menu */}
                  <div className="main-menu">
                 
                  </div>          
                  {/* Header-btn */}
                  <div className="header-btn d-none f-right d-lg-block" style={{marginLeft:'70%'}}>
            
                  <a   href='PageAccueil' className="nav-link dropdown-toggle" type="button" style={{color:'blue'}} 
                        >
                           Liste Offre
                          </a>
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                  
          
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>


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
  </div>
  )
}
