export default function Favorites({ items }) {
  if (items.length === 0) {
    return (
      <section>
        <h2>Favoritos</h2>
        <p>No hay favoritos todavía.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Favoritos</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}
