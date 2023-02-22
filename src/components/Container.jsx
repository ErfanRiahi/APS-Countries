import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContexts } from "../contexts/AppContexts";

export function Container() {
  const { filteredData, theme } = useContext(AppContexts);
  return (
    <div className="allCountry" id={theme}>
      {filteredData.map((item, index) => {
        return (
          <Link
            state={item.name.common}
            to={`/${item.name.common}`}
            key={index}
            className="country"
          >
            <img src={item.flags.png} alt={item.flags.alt} />
            <div>
              <h3 className="bolder">{item.name.common}</h3>
              <p>
                <span className="bold">Population: </span>
                {item.population.toLocaleString()}
              </p>
              <p>
                <span className="bold">Region: </span>
                {item.region}
              </p>
              <p>
                <span className="bold">Capital: </span>
                {item.capital}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
