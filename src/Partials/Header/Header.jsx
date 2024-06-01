import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss"; // Assurez-vous que le chemin du fichier SCSS est correct

export default function Header() {
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
    </header>
  );
}
