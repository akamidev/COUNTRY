// Importation des bibliothèques nécessaires
import React, { useContext } from 'react'; // Bibliothèque React et Hook useContext
import { NavLink } from 'react-router-dom'; // Composant NavLink de react-router-dom pour la navigation
import { ThemeContext } from '../../ThemeContext'; // Contexte du thème
import './style.scss'; // Importation du fichier SCSS

// Définition du composant Header
export default function Header() {
  // Utilisation du contexte du thème
  const { theme, toggleTheme } = useContext(ThemeContext); // Récupération du thème et de la fonction pour changer de thème

  // Rendu du composant
  return (
    <header className="header">
      <img src="/logomonde.png" alt="logomonde" />
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" activeClassName="active">
          À propos
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </header>
  );
}