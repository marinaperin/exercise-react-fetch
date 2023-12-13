import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((obj) => {
        setCountries(
          obj.sort((a, b) => (a.name.common < b.name.common ? -1 : 1))
        );
      })
      .catch((error) => console.error(error));
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
            .then((obj) =>
              setCountries(
                obj.sort((a, b) => (a.name.common < b.name.common ? -1 : 1))
              )
            )
            .catch((error) => console.error(error));
          setSearchValue("");
          console.log(countries);
        }}
      />
      <main>
        {countries.map((country) => {
          return (
            <CountryCard
              key={country.name.official}
              countryName={country.name.common}
              flagUrl={country.flags.svg}
              population={country.population}
              capitals={country.capital ? country.capital : ["Non-existent"]}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
