export default ({ countryName, flagUrl, population, capitals }) => {

  return (
    <section>
      <figure>
        <h3>{countryName}</h3>
        <img src={flagUrl} alt={`flag of ${countryName}`} />
        <p>
          {" "}
          <span className="descr">Population:</span> {population}
        </p>
        <p>
          {" "}
          <span className="descr"> Capital:</span> {[capitals]}
        </p>
      </figure>
    </section>
  );
};
