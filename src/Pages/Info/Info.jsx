// Importation des modules et des styles requis
import './style.scss';
import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Définition du composant InfoPage
export default function InfoPage() {
  // Configuration des variables d'état
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  console.log(name);

  // Récupération des données du pays depuis l'API lors du montage du composant
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/' + name + '?fullText=true')
      .then(response => response.json())
      .then(data => setCountry(data));
  }, []);
  console.log(country);

  // Rendu du composant InfoPage
  return (
    <div>
      <h1>InfoPage</h1>
      {country.map((ct) => (
        <div>
          <h2>{ct.name.common}</h2>
          <img src={ct.flags.svg} alt={ct.name.common} />
          <p>Continent: {ct.region}</p>
          <p>Capitale: {ct.capital}</p>
          <p>Population: {ct.population}</p>
          <p>Superficie: {ct.area}</p>
          {Object.values(ct.languages).map((lang) => (
            <p>Langues: {lang}</p>
          ))}
          {Object.values(ct.currencies).map((cur) => (
            <p>Monnaie: {cur.name}</p>
          ))}
          {Object.values(ct.borders).map((border) => (
            <p>Pays frontaliers: {border}</p>
          ))}

          <div className="map">
            <iframe
              title="map"
              src={`https://maps.google.com/maps?q=${ct.latlng}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="450px"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
