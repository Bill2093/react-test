import { useEffect, useMemo, useState } from "react";
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

const PAGE_SIZE = 10;

export default function App() {
  const { posts, users, loading, error } = usePosts();

  // Search + filtros
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");

  // Paginación
  const [page, setPage] = useState(1);

  // Favoritos
  const [favorites, setFavorites] = useState([]);

  // 1) Filtrar primero (search + userId)
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

  // 2) Total de páginas
  const total = useMemo(() => Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)), [filtered.length]);

  // 3) Si cambia búsqueda/filtro, volver a página 1
  useEffect(() => {
    setPage(1);
  }, [search, userId]);

  // 4) Paginar al final
  const pageItems = useMemo(() => paginate(filtered, page, PAGE_SIZE), [filtered, page]);

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
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={2}
      >
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

      {/* Toolbar */}
      <Box sx={{ mt: 2 }}>
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
          <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
            <Box sx={{ flex: 1 }}>
              <SearchBar value={search} onChange={setSearch} />
            </Box>

            <Box sx={{ width: { xs: "100%", md: 320 } }}>
              <Filters users={users} userId={userId} onChange={setUserId} />
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* Main layout */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mt: 2 }}
        alignItems="flex-start"
      >
        {/* Lista */}
        <Box sx={{ flex: 1, width: "100%" }}>
          <PostList
            items={pageItems}
            favorites={favorites}
            onFavorite={setFavorites}
          />

          <Box sx={{ mt: 2 }}>
            <Pagination page={page} total={total} onChange={setPage} />
          </Box>
        </Box>

        {/* Favoritos */}
        <Box sx={{ width: { xs: "100%", md: 360 } }}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700}>
              Favoritos
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Favorites items={favorites} />
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}
