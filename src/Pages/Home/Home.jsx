import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'; // Assurez-vous que le chemin du fichier SCSS est correct

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un pays..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>Envover</button>
      </div>

      <div className="display">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="country-card">
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={country.name.common} />
            <p>Continent: {country.region}</p>
            <p>Capitale: {country.capital && country.capital[0]}</p>
            <div className="button">
              <Link to={"/info/" + country.name.official}>
                <button>Pour plus d'information</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
