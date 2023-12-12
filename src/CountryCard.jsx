export default ({ countryName, flagUrl, population, capital }) => {
  return (
    <section>
      <figure>
        <h3>{countryName}</h3>
        <img src={flagUrl} alt={countryName} />
        <p>
          {" "}
          <span>Population :</span> {population}
        </p>
        <p>
          {" "}
          <span> Capitali :</span> {capital ? capital[0] : "Inesistente"}
        </p>
      </figure>
    </section>
  );
};
