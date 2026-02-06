import { Button, Card, CardContent, Stack, Typography } from "@mui/material";

export default function PostList({ items, favorites, onFavorite }) {
  const favoriteIds = new Set(favorites.map((f) => f.id));

  function addFavorite(post) {
    if (favoriteIds.has(post.id)) return;
    onFavorite([post, ...favorites]);
  }

  function removeFavorite(id) {
    onFavorite(favorites.filter((f) => f.id !== id));
  }

  return (
    <Stack spacing={2}>
      {items.map((p) => {
        const isFav = favoriteIds.has(p.id);

        return (
          <Card key={p.id} variant="outlined" sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {p.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {p.body}
              </Typography>

              {isFav ? (
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => removeFavorite(p.id)}
                >
                  Quitar de favoritos
                </Button>
              ) : (
                <Button variant="contained" onClick={() => addFavorite(p)}>
                  Agregar a favoritos
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}
