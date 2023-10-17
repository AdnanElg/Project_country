/* eslint-disable react/prop-types */
const Card = ({ dataCountry }) => {
  return (
    <li className="card">
      <img
        src={dataCountry.flags.svg}
        alt={"drapeaux" + dataCountry.translations.fra.common}
      />
      <div className="infos">
        <h2>{dataCountry.translations.fra.common}</h2>
        <h4>{dataCountry.capital}</h4>
        <p>Pop. {dataCountry.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
