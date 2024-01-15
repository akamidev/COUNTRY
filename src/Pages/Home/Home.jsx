import './style.scss'; 
import React, { useEffect, useState } from 'react'; // Importation des modules React 
import { Link } from 'react-router-dom'; // Importation du module Link pour la navigation

export default function Home() { // Définition du composant Home
  const [searchQuery, setSearchQuery] = useState(''); // Déclaration de l'état searchQuery avec useState
  const [countries, setCountries] = useState([]); // Déclaration de l'état countries avec useState
  const [filteredCountries, setFilteredCountries] = useState([]); // Déclaration de l'état filteredCountries avec useState

  useEffect(() => { // Utilisation de useEffect pour effectuer une action après le rendu initial
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,translations,latlng,maps,population,flags,capitalInfo') // Appel à l'API pour récupérer les données des pays
      .then(response => response.json()) // Conversion de la réponse en JSON
      .then(data => setCountries(data)); // Mise à jour de l'état countries avec les données récupérées
  }, []);

  const handleSearch = () => { // Fonction de gestion de la recherche
    if (searchQuery === '') { // Vérification si la recherche est vide
      const resulte = document.querySelector('.display'); // Sélection de l'élément avec la classe 'display'
      resulte.style.display='none'; // Masquage de l'élément
    }
    else {
      const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase())); // Filtrage des pays en fonction de la recherche
      setFilteredCountries(filteredCountries); // Mise à jour de l'état filteredCountries avec les pays filtrés
      const resulte = document.querySelector('.display'); // Sélection de l'élément avec la classe 'display'
      resulte.style.display='grid'; // Affichage de l'élément
    }
  };

  return (
    <div className="home"> // Début du rendu du composant Home
      <div className="search-container"> // Conteneur de recherche
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> // Champ de recherche
        <button onClick={handleSearch}>Envoyer</button> // Bouton de recherche
      </div>
      <div className="display"> // Conteneur d'affichage des pays
        {filteredCountries.map(country => ( // Boucle sur les pays filtrés
          <div key={country.name.common}> // Élément de pays
            <h2>{country.name.common}</h2> // Nom du pays
            <img src={country.flags.png} alt={country.name.common} /> // Drapeau du pays
            <p>Continent: {country.region}</p> // Continent du pays
            <p>Capitale: {country.capital}</p> // Capitale du pays
            <Link to={"/info/" + country.name.official}> // Lien vers la page d'information du pays
              <button>Pour plus d'information</button> // Bouton pour plus d'information
            </Link>
          </div>
        ))}
      </div>
    </div> 
  );
}


