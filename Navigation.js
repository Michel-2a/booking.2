import React, { useState } from 'react';
import Logo from "../components/images/logo4.png";
import UserProfile from "../components/images/profil.png";
import { Link } from 'react-router-dom';
import "../components/navbar.css/navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';

const MENU_ITEMS = [
  { name: "Compte", path: "/Compte" },
  { name: "Profil", path: "/Profil" },
  { name: "Inscription", path: "/inscription" },
  { name: "Connexion", path: "/connexion" },
  { name: "Deconnexion", path: "/deconnexion" }
];

const Navigation = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img src={Logo} alt="Logo de l'entreprise" />
        </Link>
      </div>
      <div className='navigation-bar'>
        <div className="menu">
          <div className="bar1">
            <Link to="#">Villes</Link>
          </div>
          <div className="bar1">
            <Link to="#">Quartiers</Link>
          </div>
          <div className="bar1">
            <Link to="#">Chambres</Link>
          </div>
        </div>
        <button type="submit" aria-label="Rechercher">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='language'>
        <FontAwesomeIcon icon={faGlobe} className="language-icon" onClick={toggleLanguageMenu} aria-label="Changer de langue" />
      </div>
      <div className='relative'>
        <img src={UserProfile} alt="Profil utilisateur" width={40} onClick={toggleProfileMenu} aria-label="Ouvrir le menu de profil" />
        {isProfileMenuOpen && (
          <div className='profile-menu' onClick={(e) => e.stopPropagation()}>
            <ul>
              {MENU_ITEMS.map((menuItem) => (
                <li key={menuItem.name}>
                  <Link to={menuItem.path}>{menuItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
