import React from 'react'

import { Link } from 'react-router-dom';
export default function ListeCondidatParOffre() {
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

      <main>
      {/* slider Area Start*/}
      <div className="slider-area ">
        {/* Mobile Menu */}
        <div className="slider-active">
        <div className="single-slider slider-height d-flex align-items-center" >
        
   
                <div className="wrap">
                <div className="box">
                  <div className="box-top">
                    <img className="box-image" src="https://www.hr-voice.com/wp-content/uploads/2020/07/candidat-ideal.png" alt="Girl Eating Pizza" />
                    <div className="title-flex">
                      <h3 className="box-title">Kelsie Meyer</h3>
                      <p className="user-follow-info">17 Projects</p>
                    </div>
                    <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                  </div>
                  <a href="Condidature" className="button">Consulter</a>
                </div>
                <div className="box">
                  <div className="box-top">
                    <img className="box-image" src="https://www.hr-voice.com/wp-content/uploads/2020/07/candidat-ideal.png" alt="Girl Eating Pizza" />
                    <div className="title-flex">
                      <h3 className="box-title">Mark Carusso</h3>
                      <p className="user-follow-info">33 Projects</p>
                    </div>
                    <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                  </div>
                  <a href="#" className="button">Consulter</a>
                </div>
                <div className="box">
                  <div className="box-top">
                    <img className="box-image" src="https://www.hr-voice.com/wp-content/uploads/2020/07/candidat-ideal.png" alt="Girl Eating Pizza" />
                    <div className="title-flex">
                      <h3 className="box-title">Taylor Green</h3>
                      <p className="user-follow-info">26 Projects</p>
                    </div>
                    <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                  </div>
                  <a href="#" className="button">Consulter</a>
                </div>
                <div className="box">
                  <div className="box-top">
                    <img className="box-image" src="https://www.hr-voice.com/wp-content/uploads/2020/07/candidat-ideal.png" alt="Girl Eating Pizza" />
                    <div className="title-flex">
                      <h3 className="box-title">Isaiah Jian</h3>
                      <p className="user-follow-info">12 Projects</p>
                    </div>
                    <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                  </div>
                  <a href="#" className="button">Consulter</a>
                </div>
              </div>
        


        

          </div>
        </div>
      </div>

    

    </main>


    </div>
  )
}
