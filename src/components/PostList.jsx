export default function PostList({ items, favorites, onFavorite }) {
  const toggleFavorite = post => {
    const exists = favorites.some(favorite => favorite.id === post.id);
    if (exists) {
      onFavorite(favorites.filter(favorite => favorite.id !== post.id));
      return;
    }
    onFavorite([...favorites, post]);
  };

  if (items.length === 0) {
    return <p>No hay resultados.</p>;
  }
// para mostrar el Display list 
  return (
    <ul>
      {items.map(post => {
        const isFavorite = favorites.some(favorite => favorite.id === post.id);
        return (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button type="button" onClick={() => toggleFavorite(post)}>
              {isFavorite ? "Quitar favorito" : "Agregar favorito"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
