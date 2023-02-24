import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { AppContexts } from "../../contexts/AppContexts";
import "./country.css";
import "../../components/style.css";
import { Link, useLocation } from "react-router-dom";
import { Borders } from "../../components/Borders";
import { NotFound } from "../NotFoundPage/NotFound";

export function Country({ data }) {
  const { theme, setFilteredData } = useContext(AppContexts);
  useEffect(() => {
    setFilteredData(data);
  }, []);
  const location = useLocation();
  if (location.state === null) return <NotFound />;
  return data ? (
    showCountry(
      data.filter((item) => item.name.common === location.state)[0],
      theme
    )
  ) : (
    <h1>Loading...</h1>
  );
}

function showCountry(data, theme) {
  document.title = "All Countries | " + data.name.common;
  return (
    <div id={theme}>
      <button
        onClick={() => window.history.back()}
        className="backBtn btn"
        id={theme}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </button>

      <div className="container">
        <img src={data.flags.svg} alt={data.flags.alt} />
        <div className="detail">
          <h2>{data.name.common}</h2>
          <div className="detail2">
            <div>
              <p>
                <span className="bold">Native Name: </span>
                {Object.values(data.name.nativeName)[0].official}
              </p>
              <p>
                <span className="bold">Population: </span>
                {data.population.toLocaleString()}
              </p>
              <p>
                <span className="bold">Region: </span>
                {data.region}
              </p>
              <p>
                <span className="bold">Sub Region: </span>
                {data.subregion}
              </p>
              <p>
                <span className="bold">Capital: </span>
                {data.capital}
              </p>
            </div>
            <div>
              <p>
                <span className="bold">Top Level Domain: </span>
                {data.tld[0]}
              </p>
              <p>
                <span className="bold">Currencies: </span>
                {Object.values(data.currencies)[0].name}
              </p>
              <p>
                <span className="bold">Languages: </span>
                {Object.values(data.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="bordersDiv">
            <div className="bold">Border Countries: </div>
            <div className="borders">
              {data.borders
                ? data.borders.map((item, index) => {
                    return (
                      <Borders
                        cca3={item}
                        theme={theme}
                        key={index}
                        allData={data}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
