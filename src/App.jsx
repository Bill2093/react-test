import { useMemo, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import { paginate } from "./utils/pagination";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import Favorites from "./components/Favorites";

import {
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
//pagination
const PAGE_SIZE = 10;

export default function App() {

  const { posts, users, loading, error } = usePosts();
// Estado para búsqueda, filtrado, paginación y favoritos.
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");

  const [page, setPage] = useState(1);

  const [favorites, setFavorites] = useState([]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return posts.filter((p) => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q);

      const matchesUser = !userId || p.userId === Number(userId);

      return matchesSearch && matchesUser;
    });
  }, [posts, search, userId]);
  // Calcular el número total de páginas.
  const total = useMemo(
    () => Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)),
    [filtered.length]
  );
  // Actualiza la búsqueda y reinicia la paginación.
  const handleSearchChange = (value) => {
    setPage(1);
    setSearch(value);
  };

  const handleUserChange = (value) => {
    setPage(1);
    setUserId(value);
  };

  const handleRemoveFavorite = (id) => {
    setFavorites((current) =>
      current.filter((favorite) => favorite.id !== id)
    );
  };
  // Mostrar solo los elementos de la lista filtrada que pertenecen a la página actual.
  const pageItems = useMemo(
    () => paginate(filtered, page, PAGE_SIZE),
    [filtered, page]
  );

  if (loading) {
    return (
      <Container sx={{ py: 3 }}>
        <Typography>Cargando...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 3 }}>
        <Typography color="error">Error: {String(error)}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={2}
      > {/* Task 4 (Styling and Responsiveness) */}
        <Box>
          <Typography variant="h4" fontWeight={700}>
            React Technical Test
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Posts + Search + Filter + Favorites + Pagination
          </Typography>
        </Box>

        <Chip label={`Resultados: ${filtered.length}`} />
      </Stack>

      <Box sx={{ mt: 2 }}>
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
          <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
            <Box sx={{ flex: 1 }}>
              {/*Task 2: search */}
              <SearchBar value={search} onChange={handleSearchChange} />
            </Box>
              {/* Task 2: User filter select. */}
            <Box sx={{ width: { xs: "100%", md: 320 } }}>
              <Filters users={users} userId={userId} onChange={handleUserChange} />
            </Box>
          </Stack>
        </Paper>
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mt: 2 }}
        alignItems="flex-start"

      >{/*Task 1 (Data Fetching and Display   &  Task 3 (User Interaction and State Management)*/}

        <Box sx={{ flex: 1, width: "100%" }}>
          <PostList
            items={pageItems}
            favorites={favorites}
            onFavorite={setFavorites}
          />
          {/* Search + filter toolbar. */}
          <Box sx={{ mt: 2 }}>
            <Pagination page={page} total={total} onChange={setPage} />
          </Box>
        </Box>
         {/* Favorites panel. */}
        <Box sx={{ width: { xs: "100%", md: 360 } }}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700}>
              Favoritos
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Favorites items={favorites} onRemove={handleRemoveFavorite} />
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}
