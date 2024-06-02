// Importation des bibliothèques nécessaires
import React from 'react'; // Bibliothèque React pour la création d'interfaces utilisateur
import ReactDOM from 'react-dom/client'; // Bibliothèque ReactDOM pour le rendu des composants React dans le DOM
import './index.css'; // Importation du fichier CSS global
import App from './App'; // Importation du composant App principal
import { ThemeProvider } from './ThemeContext'; // Importation du fournisseur de contexte de thème

// Création d'une racine DOM à partir de l'élément avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans la racine DOM
root.render(
  // Utilisation du mode strict de React pour mettre en évidence les problèmes potentiels dans l'application
  <React.StrictMode>
    {/* Utilisation du fournisseur de contexte de thème pour permettre l'accès au thème dans toute l'application */}
    <ThemeProvider>
      {/* Utilisation du fournisseur de contexte de thème pour envelopper l'application */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);