import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdownClick() {
    setShowDropdown(!showDropdown);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Plateforme de Recrutement</Link>
      <div className="navbar-menu">
        <Link to="/login" className="nav-link login-link">Connexion</Link>
        <div className="dropdown">
          <button className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton" onClick={handleDropdownClick}>
            Inscription
          </button>
          <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
            <Link to="/register" className="dropdown-item">Candidat</Link>
            <Link to="/registersc" className="dropdown-item">Société</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
