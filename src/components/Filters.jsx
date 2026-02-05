export default function Filters({ users, onChange }) {
  return (
    <label>
      Usuario:
      <select onChange={event => onChange(event.target.value)}>
        <option value="">Todos</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </label>
  );
}
