import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import './cardJob.css'
const axios = require('axios');
export default function AvisJobs() {
  const id = useParams();
  console.log('id',id)
  const [search, setSearch] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState("");

const serchByCat =async()=>{

  
 
  fetch(`http://localhost:5000/GETOffreWithCompetence?comp=${search}`).then
  (res =>
 res.json()
    ).then(res=> setSearchFilter(
      
      (prevState) => ({
      ...prevState,
      res
      })
 
    ))
    fetch(`http://localhost:5000/GETOffreWithDomaine?dmaine=${search}`).then
  (res =>
 res.json()
    ).then(res=> setSearchFilter(
      
      (prevState) => ({
      ...prevState,
      res
      })
 
    ))

 

}

const serchatCat=async()=>{
  fetch(`http://localhost:5000/GETOffreWithCompetence?adresse =${search}`).then
  (res =>
 res.json()
    ).then(res=> setSearchFilter(
      
      (prevState) => ({
      ...prevState,
      res
      })
 
    ))
}





  return (
    <div>
    {/* Preloader Start */}
    <div id="preloader-active">
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
              <Link to="/" className="navbar-brand" style={{color:'black'}}><img src="/assets/img/logo/logo-no-background.png"  style={{width:'100%'}} alt /></Link>

              </div>  
              
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="menu-wrapper">
                {/* Main-menu */}
                <div className="main-menu">
               
                </div>          
                {/* Header-btn */}
                <div className="header-btn d-none f-right d-lg-block " style={{marginTop:10}}>
             <a href='PublierCV'>
                  <button type="button" class="btn btn-primary btn-lg btn-radius">Déposer Votre CV</button>
                  </a>
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
    {/* Header End */}
  </header>
<hr style={{
          background: '#BCA3EC',
          color: '#BCA3EC',
          borderColor: '#BCA3EC',
          height: '1px',
        }}/>
    <main>
      {/* slider Area Start*/}
      <div className="slider-area ">
        {/* Mobile Menu */}
        <div className="slider-active">
        <div className="single-slider slider-height d-flex align-items-center" >
        
            <div className="container"style={{marginTop:'-230px',}}>
          
              <div className="row"style={{height:100,marginTop:-350}} >
               
                <div className="col-xl-6 col-lg-10 col-md-12" style={{marginLeft:'50px',}}>
                  
                 <div className="form" style={{position:'relative'}}>
                    <i className="fa fa-search" onClick={serchByCat} style={{position:'absolute',top:'10px',left:'500px',color: '#9ca3af'}}/>
                    <input type="text" className="form-control form-input"
                    style={{width:600}}
                  onChange={(e)=>setSearch(e.target.value)} 
                  value={search}
                    placeholder="Métier ,Entreprise..." />
                    <span className="left-pan"></span>
                 </div>
                 <br/>
              
               <div className="form" style={{position:'relative'}}>
                    <i className="fa fa-map" style={{position:'absolute',top:'10px',left:'500px',color: '#9ca3af'}} onClick={serchatCat}/>
                    <input type="text" className="form-control form-input" placeholder="Ville......." style={{width:600}}/>
                    <span className="left-pan"></span>
               </div>


               <br/>
               <div>

               </div>
             



               <div className="col-xl-8" style={{marginLeft:300}} >
               <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    {Object.keys(searchFilter).map((key) => {
                      return searchFilter[key].map((offre) => (
                        <div class="cards" style={{ margin: 150 }}>
                          <div class="card card-1">
                            <div class="card__icon">
                              <i class="fas fa-bolt"></i>
                              <h6 style={{ alignItems: 'center', marginLeft: 100 }}>{offre.nom}</h6>
                            </div>
                            <p class="card__exit"></p>
                            <h2 class="card__title">
                              <h2 class="card__title" style={{ marginTop: 50 }}>{offre.description}</h2>
                              <h4 style={{ alignItems: 'center', marginLeft: 20 }}>Compétences demandées:</h4>
                              {Object.keys(offre.competencesdemande).map((competenceKey, index) => (
                                <h6 key={index} style={{ alignItems: 'center', marginLeft: 20 }}>
                                  {offre.competencesdemande[competenceKey]}
                                </h6>
                              ))}
                            </h2>
                            <p class="card__apply">
                              <a class="card__link" href="#" style={{ marginLeft: 20 }}>
                                Date: {offre.debutoffre}
                              </a>
                              <a class="card__link" href="#" style={{ marginLeft: 300 }}>
                                Poster <i class="fas fa-arrow-right"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      ));
                    })}
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
