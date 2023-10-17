import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRafio] = useState("");
  const radioValue = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res.data);
        return setData(res.data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Une erreur c'est produite : " + error);
      });
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          value={rangeValue}
          onChange={handleChange}
          type="range"
          min="1"
          max="250"
        />
        {radioValue.map((continent, index) => (
          <div key={index}>
            <input
              onChange={() => {}}
              onClick={() => setSelectedRafio(continent)}
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
            />
            <label htmlFor={continent}>{continent}</label>
          </div>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRafio("")}>
          Annuler la recherche
        </button>
      )}
      <ul className="container__cards">
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card dataCountry={country} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
