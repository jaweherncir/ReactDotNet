
import { useState,React } from 'react';
import styled from 'styled-components';
import Header from './Header';
export default function Templat() {
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
 <Header/>
    <main >
      {/* slider Area Start*/}
      <div className="slider-area ">
        {/* Mobile Menu */}
        <div  style={{height:'700%',marginLeft:'500'}}>
        <div className="single-slider slider-height d-flex align-items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        
         
              
                <div className="col-xl-6 col-lg-9 col-md-10">
                  <div className="hero__caption">
                    <h2>Who are ?</h2>
                    <h2>what coming do ? </h2>
                    <h2>In this Plateforme </h2>
                  </div>
                </div>
            
             
           
       
          </div>
        </div>
      </div>

    

    </main>
    <footer>
      {/* Footer Start*/}
      <div className="footer-area footer-bg footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <h4>About Us</h4>
                    <div className="footer-pera">
                      <p>Search work Postler do your test</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <p>Address :Tunise .</p>
                    </li>
                    <li><a href="#">Phone : +216 20 11 3 786</a></li>
                    <li><a href="#">Email : info@colorlib.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Important Link</h4>
                  <ul>
                    <li><a href="#"> Logni</a></li>
                    <li><a href="#">Inscrit Condidat</a></li>
                    <li><a href="#">Inscrit Société</a></li>
                    <li><a href="#">Poster cv</a></li>
                    <li><a href="#">Poster emploi</a></li>
                    <li><a href="#">Entreprise</a></li>
                    <li><a href="#"> test technique</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                
                  {/* Form */}
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="row footer-wejed justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              {/* logo */}
              <div className="footer-logo mb-20">
                <a href="index.html"></a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="footer-tittle-bottom">
                <span>5000+</span>
                <p>Offres emplois</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="footer-tittle-bottom">
                <span>451</span>
                <p>Sociétés</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              {/* Footer Bottom Tittle */}
              <div className="footer-tittle-bottom">
                <span>568</span>
                <p>Talented Hunter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </footer>
  </div>
  )
}
