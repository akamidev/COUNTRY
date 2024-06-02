// Importation des bibliothèques nécessaires
import React, { useEffect, useState } from "react"; // Bibliothèque React et Hooks
import { useParams } from "react-router-dom"; // Hook useParams de react-router-dom pour accéder aux paramètres de l'URL
import "./style.scss"; // Importation du fichier SCSS

// Définition du composant InfoPage
export default function InfoPage() {
  // Déclaration des états locaux avec useState
  const [country, setCountry] = useState([]); // Informations sur le pays
  const { name } = useParams(); // Récupération du nom du pays à partir des paramètres de l'URL

  // Utilisation de useEffect pour récupérer les informations sur le pays lorsque le nom du pays change
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name + "?fullText=true") // Requête à l'API
      .then((response) => response.json()) // Conversion de la réponse en JSON
      .then((data) => setCountry(data)); // Mise à jour de l'état country avec les données récupérées
  }, [name]); // Dépendances de useEffect (name pour exécuter à chaque changement de nom)

  // Rendu du composant
  return (
    <div className="main-content">
      {country.map((ct) => (
        <div key={ct.name.common}>
          <h1 className="page-title">Informations sur {ct.name.common}</h1>
          <div className="country-container">
            <div className="text-container">
              <h2>{ct.name.common}</h2>
              <p>Continent: {ct.region}</p>
              <p>Capitale: {ct.capital}</p>
              <p>Population: {ct.population}</p>
              <p>Superficie: {ct.area}</p>
              {ct.languages &&
                Object.values(ct.languages).map((lang) => (
                  <p key={lang}>Langues: {lang}</p>
                ))}
              {ct.currencies &&
                Object.values(ct.currencies).map((cur) => (
                  <p key={cur.name}>Monnaie: {cur.name}</p>
                ))}
              {ct.borders &&
                Object.values(ct.borders).map((border) => (
                  <p key={border}>Pays frontaliers: {border}</p>
                ))}
            </div>
            <img src={ct.flags.svg} alt={ct.name.common} />
          </div>
          <div className="map">
            <iframe
              title="map"
              src={`https://maps.google.com/maps?q=${ct.latlng}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
              width="90%"
              height="350px"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}