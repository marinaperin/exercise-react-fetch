export default ({ value, onChange, onSearch }) => {
  return (
    <div className="Mary">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <button onClick={onSearch}>Cerca</button>
    </div>
  );
};
