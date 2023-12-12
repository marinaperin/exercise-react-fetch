import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [componentDidUpdate, setComponentDidUpdate] = useState(false);
  useEffect(() => {
    if (componentDidUpdate) {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((obj) => setCountries(obj))
        .catch((error) => console.error(error));
    }
  }, []);
  useEffect(() => {
    setComponentDidUpdate(true);
  }, []);
  return (
    <div>
      <SearchBar
        value={searchValue}
        onChange={(newValue) => {
          setSearchValue(newValue);
        }}
        onSearch={() => {
          fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
            .then((response) => response.json())
            .then((obj) => setCountries(obj))
            .catch((error) => console.error(error));
          setSearchValue("");
        }}
      />
      {countries.length === 1 && (
        <CountryCard
          countryName={countries[0].name.common}
          flagUrl={countries[0].flags.svg}
          population={countries[0].population}
          capital={countries[0].capital}
        />
      )}
    </div>
  );
}

export default App;
