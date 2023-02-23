import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Borders({ cca3, theme, index, allData }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${cca3}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log("something went wrong\n" + err));
  }, [allData]);

  const countryName = data ? data[0].name.common : "";
  return (
    <NavLink
      state={countryName}
      to={`/${countryName}`}
      className="borderCountry btn"
      id={theme}
      key={index}
    >
      {countryName}
    </NavLink>
  );
}
