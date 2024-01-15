
// Importation du composant NavLink depuis la bibliothèque "react-router-dom"
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header class="header">
        <img src="/logomonde.png" alt="logomonde" />
        <div>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">A propos</NavLink>
        </div>
      </header>
    </>
  );
}
