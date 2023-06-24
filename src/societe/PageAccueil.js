import { useState,React } from 'react';
import { Link } from 'react-router-dom';

export default function PageAccueil() {
    const backgroundImage = '/assets/img/hero/h1_hero.jpg';
    const [showDropdown, setShowDropdown] = useState(false);

    function handleDropdownClick() {
      setShowDropdown(!showDropdown);
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
            
                  <a   href='NouvelleOffre' className="nav-link dropdown-toggle" type="button" style={{color:'blue'}} 
                        >
                            Nouvelle Offre
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
        
            <div className="container">
            <div class="container">
                    <div class="card">
                        <div class="box">
                            {/*card */}
                        <div class="content">
                            <h1>Société</h1>
                            <h3>IT GATE</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="ListeCondidatParOffre">condidat poster</a>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            {/*card */}
                        <div class="content">
                            <h1>Société</h1>
                            <h3>IT GATE</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="ListeCondidatParOffre">condidat poster</a>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            {/*card */}
                        <div class="content">
                            <h1>Société</h1>
                            <h3>IT GATE</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="ListeCondidatParOffre">condidat poster</a>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            {/*card */}
                        <div class="content">
                            <h1>Société</h1>
                            <h3>IT GATE</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="ListeCondidatParOffre">condidat poster</a>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            {/*card */}
                        <div class="content">
                            <h1>Société</h1>
                            <h3>IT GATE</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="ListeCondidatParOffre">condidat poster</a>
                        </div>
                        </div>
                    </div>
                    

</div>
              {/* Search Box */}
              <div className="row">
                <div className="col-xl-8">
           
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
