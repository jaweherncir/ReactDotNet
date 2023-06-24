
import { useState,React } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    const backgroundImage = '/assets/img/hero/h1_hero.jpg';
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownn, setShowDropdownn] = useState(false);
    function handleDropdownClick() {
      setShowDropdown(!showDropdown);
    }
    function handleDropdownnClick() {
      setShowDropdownn(!showDropdownn);
    }



    
  return (
    
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
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  {/* Main-menu */}
                  <div className="main-menu">
                 
                  </div>          
                  {/* Header-btn */}
                  <div className="header-btn d-none f-right d-lg-block" style={{marginLeft:'70%'}}>
                  
                  <div className="dropdown">
                          <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton"style={{color:'blue'}} 
                          onClick={handleDropdownnClick}>
                            Connexion
                          </button>
                          <div className={`dropdown-menu ${showDropdownn ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <Link to="/LoginCondidat" className="dropdown-item" style={{color:'blue'}}>Candidat</Link>
                            <Link to="/LoginSoc" className="dropdown-item" style={{color:'blue'}}>Société</Link>
                          </div>
                   </div>
                 
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                  
                  <div className="dropdown">
                          <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton"style={{color:'blue'}} onClick={handleDropdownClick}>
                            Inscription
                          </button>
                          <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <Link to="/RegisterCondidat" className="dropdown-item" style={{color:'blue'}}>Candidat</Link>
                            <Link to="/registersc" className="dropdown-item" style={{color:'blue'}}>Société</Link>
                          </div>
                   </div>
                 
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
  )
}
