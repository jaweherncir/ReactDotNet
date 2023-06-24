import React from 'react'

import { Link } from 'react-router-dom';
export default function TestTechnique() {
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
                  <Link to="/" className="navbar-brand" style={{color:'black'}}><img src="/assets/img/logo/logo-no-background.png"  style={{width:200}} alt /></Link>

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




<main>
          {/* slider Area Start*/}
          <div className="slider-area ">
            {/* Mobile Menu */}
            <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center" >
            
                <div className="container"style={{marginTop:'-230px'}}>
                   <div className="row">
                 




                        <div className="container-fluid" id="grad1" style={{marginTop:'10%'}}>
                        <div className="row justify-content-center mt-0">
                            <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                            <div className="card px-0 pt-4 pb-0 mt-3 mb-3" >
                                <h2><strong>Test Technique </strong></h2>
                                <p>Commencer Votre Test</p>
                                <div className="row">
                                <div className="col-md-12 mx-0">
                                    <form id="msform">
                                    {/* progressbar */}
                                 
                                    {/* fieldsets */}
                                    <fieldset>
                                        <div className="form-card">
                                        <h2 className="fs-title">Question Offres</h2>
                                        <input type="text" name="email" placeholder="Nom diplome" />
                                        <input type="text" name="uname" placeholder="école" />
                                        <input type="text" name="pwd" placeholder="date" />
                                
                                        </div>
                                        <input type="button" name="next" className="next action-button" defaultValue="Postler" />
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
