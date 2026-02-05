// Task 2: Search and Filtering, linea 15 y 47

export default function SearchBar({ value, onChange }) {
  return (
    <label>
      Buscar:
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="Buscar por título"
      />
    </label>
  );
}
