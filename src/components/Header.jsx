import { useContext } from "react";
import { AppContexts } from "../contexts/AppContexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

export function Header() {
  const { theme, setTheme } = useContext(AppContexts);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <header id={theme}>
      <NavLink to={"/"}>
        <h2 className="bolder">Where in the world?</h2>
      </NavLink>
      <button onClick={toggleTheme} className="bold theme" id={theme}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        {theme === "light" ? " Dark" : " Light"} Mode
      </button>
    </header>
  );
}
