import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AppContexts } from "../contexts/AppContexts";

export function Filter(props) {
  const data = props.data;
  const { theme, setFilteredData } = useContext(AppContexts);
  const [countryName, setCountryName] = useState("");
  const [countryRegion, setCountryRegion] = useState("all");

  let selectedRegion = [];

  const filterRegion = (e) => {
    setCountryRegion(e.target.value);
    if (e.target.value === "all")
      setFilteredData(
        data.filter((item) => {
          return (
            item.region &&
            item.name.common.toLowerCase().includes(countryName.toLowerCase())
          );
        })
      );
    else
      setFilteredData(
        data.filter((item) => {
          return (
            item.region === e.target.value &&
            item.name.common.toLowerCase().includes(countryName.toLowerCase())
          );
        })
      );
  };

  const searchFilter = (e) => {
    setCountryName(e.target.value);
    if (e.target.value === "")
      setFilteredData(
        data.filter((item) => {
          return (
            item.name.common &&
            (countryRegion === "all"
              ? item.region
              : item.region === countryRegion)
          );
        })
      );
    else
      setFilteredData(
        data.filter((item) => {
          return (
            (countryRegion === "all"
              ? item.region
              : item.region === countryRegion) &&
            item.name.common
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          );
        })
      );
  };
  return (
    <>
      <div className="filter" id={theme}>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search for a country..."
            onInput={searchFilter}
          />
        </div>
        <select className="region" onChange={filterRegion}>
          <option value="all" defaultChecked>
            Filter by region
          </option>
          {data.map((item, index) => {
            if (!selectedRegion.includes(item.region)) {
              selectedRegion.push(item.region);
              return (
                <option key={index} value={item.region}>
                  {item.region}
                </option>
              );
            }
          })}
        </select>
      </div>
    </>
  );
}
