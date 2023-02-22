import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./components/style.css";
import { AppContexts } from "./contexts/AppContexts";
import { Country } from "./pages/CountryPage/Country";
import { fetchAPI } from "./components/API/fetchAPI";

function App() {
  const [theme, setTheme] = useState("light");
  const [filteredData, setFilteredData] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchAPI().then((data) => {
      setData(data);
      setFilteredData(data);
    });
  }, []);
  return (
    <AppContexts.Provider
      value={{ theme, setTheme, filteredData, setFilteredData }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/:title" element={<Country data={data} />} />
        </Routes>
      </BrowserRouter>
    </AppContexts.Provider>
  );
}

export default App;
