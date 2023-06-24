import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
export default function PublierCV () {

  const id = useParams().id; // Assuming the parameter name is "id"

  const [candidatId, setId] = useState('');
  const [date, setdate] = useState('');
  const [nom, setnom] = useState('');
  const [ecole, setecole] = useState('');
  const [competences, setcompetences] = useState('');
  const [date_debut, setDatD] = useState('');
  const [date_fin, setDatF] = useState('');
  const [nomsociete, setnomsociete] = useState('');
  const [sujet, setsujet] = useState('');
  const addDiplome = (e) => {
    const currentDate = new Date();
    e.preventDefault();
    setId(localStorage.getItem('userId')); // Assign the value of "id" parameter to candidatId state variable
    //localStorage.getItem('userId');
    axios({
      method: "POST",
      url: 'http://localhost:5000/RegistryCandidatCtlr/AddDiplome',
      data: [{
        candidatId,
        date: currentDate,
        nom,
        ecole,
      }],
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          alert('Diplome ajouté');
          console.log(res.data);
        } else {
          alert('Diplome  ajouté');
        }
      }) 
      .catch((err) => {
        console.log('Diplome non ajouté');
      });
  };

  const addComp = (e) => {
    e.preventDefault();
 
  
    const data = {
      candidatId,
      competences: [], // Replace empty array with the competences array you want to send
    };
  
    axios
      .post('http://localhost:5000/RegistryCandidatCtlr/AddCompetences', data)
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          alert('Compétences ajoutées');
          console.log(res.data);
        } else {
          alert('Compétences ajoutées');
        }
      })
      .catch((err) => {
        console.log('Compétences non ajoutées');
      });
  };
  const addExper = (e) => {
    e.preventDefault();
 
  
    const data =[ {
      candidatId,
      date_debut,
      date_fin,
      nomsociete,
      sujet
    }];
  
    axios
      .post('http://localhost:5000/RegistryCandidatCtlr/AddExperience', data)
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          alert('Compétences ajoutées');
          console.log(res.data);
        } else {
          alert('Compétences ajoutées');
        }
      })
      .catch((err) => {
        console.log('Compétences non ajoutées');
      });
  };

    return (
        <div>
        {/* Preloader Start */}
        <div id="preloader-active" style={{backgroundColor:'ActiveCaption'}}>
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle" />
              <div className="preloader-img pere-text">
            <img src="/assets/img/logo/logo-no-background.png" alt />

              </div>
            </div>
          </div>
        </div>
        {/* Preloader Start */}
        <header>
        {/* Header Start */}
        <div className="header-area header-transparrent">
          <div className="headder-top header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  {/* Logo */}
                  <div className="logo">
                  <Link to="/AvisJobs" className="navbar-brand" style={{color:'black'}}><img src="/assets/img/logo/logo-no-background.png"  style={{width:200}} alt /></Link>

                  </div>  
                  
                </div>
              
                {/* Mobile Menu */}
              
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>
    <hr style={{
              background: '#BCA3EC',
              color: '#BCA3EC',
              borderColor: '#BCA3EC',
              height: '1px',
            }}/>
         <main
    
         >
          {/* slider Area Start*/}
          <div className="slider-area ">
            {/* Mobile Menu */}
            <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center" >
            
                <div className="container"style={{marginTop:'-230px', widows:'100%'}}>
                   <div className="row">
                 




                   <div className="container-fluid" id="grad1" style={{marginTop:'10%', marginRight:150, widows:'100%'}}>
                        <div className="row justify-content-center mt-0">
                            <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                            <div className="card px-0 pt-4 pb-0 mt-3 mb-3" >
                                <h2><strong>Postuler</strong></h2>
                                <p>Publier votre cv</p>
                                <div className="row">
                                <div className="col-md-12 mx-0">
                                    <form id="msform">
                                    {/* progressbar */}
                                    <ul id="progressbar">
                                        <li className="active" id="account"><strong>Diplome</strong></li>
                                        <li id="personal"><strong>compétences</strong></li>
                                        <li id="payment"><strong>éxperience</strong></li>
                                        <li id="confirm"><strong>Comfirmer</strong></li>
                                    </ul>
                                    {/* fieldsets */}
                                    <fieldset>
                                        <div className="form-card">
                                        <h2 className="fs-title">Informations</h2>
                                        <input type="text" name="email" placeholder="Nom diplome"
                                        
                                        onChange={(e)=>setnom(e.target.value)} 
                                        value={nom}
                                        />
                                        <input type="text" name="uname" placeholder="école"
                                            onChange={(e)=>setecole(e.target.value)} 
                                            value={ecole}
                                        />
                                        
                                
                                        </div>
                                        <input type="button" name="next" className="next action-button"
                                        
                                        onClick={addDiplome}
                                        defaultValue="suivant" />
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-card">
                                        <h2 className="fs-title"> Informations compétences</h2>
                                        <input type="text" name="fname" placeholder="compétence 1"
                                            onChange={(e)=>setcompetences(e.target.value)} 
                                            value={competences}
                                        />
                                       
                                        </div>
                                        <input type="button" name="previous" className="previous action-button-previous" defaultValue="pésedent" />
                                        <input type="button" name="next" className="next action-button" onClick={addComp} defaultValue="suivant" />
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-card">
                                        <h2 className="fs-title"> Information éxpériences</h2>
                                        <div className="radio-group">
                                            
                                            <br />
                                        </div>
                                        <label className="pay">Date début</label>
                                        <input type="date" name="holdername" placeholder  onChange={(e)=>setDatD(e.target.value)} 
                                            value={date_debut} />
                                    
                                    
                                            <label className="pay">Date fin</label>
                                            <input type="date" name="cardno" placeholder
                                            
                                            onChange={(e)=>setDatF(e.target.value)} 
                                            value={date_fin}
                                            />
                                          <label className="pay">Déscription</label>
                                            <input type="text" name="cardno" placeholder 
                                            onChange={(e)=>setnomsociete(e.target.value)} 
                                            value={nomsociete}
                                            />
                                        
                                            <label className="pay">Déscription</label>
                                            <input type="text" name="cardno" placeholder 
                                            onChange={(e)=>setsujet(e.target.value)} 
                                            value={sujet}
                                            />
                                                        
                                    
                                    
                                        </div>
                                        <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                                        <input type="button" name="make_payment" className="next action-button" onClick={addExper} defaultValue="Confirm" />
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-card">
                                        <h2 className="fs-title text-center">Success !</h2>
                                        <br /><br />
                                        <div className="row justify-content-center">
                                            <div className="col-3">
                                            <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image" />
                                            </div>
                                        </div>
                                        <br /><br />
                                        <div className="row justify-content-center">
                                            <div className="col-7 text-center">
                                            <h5>Bien Postler</h5>
                                            </div>
                                        </div>
                                        </div>
                                    </fieldset>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>








                  </div>
                </div>
              </div>
            </div>
          </div>
    
        
    
        </main>
    
       </div>
    )
  }
