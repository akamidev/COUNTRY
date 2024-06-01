import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss"; // Assurez-vous que le chemin du fichier SCSS est correct

export default function InfoPage() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name + "?fullText=true")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, [name]);

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
