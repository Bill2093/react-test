import { useMemo, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import Favorites from "./components/Favorites";
import { paginate } from "./utils/pagination";

// pagination size constant
const PAGE_SIZE = 10;

export default function App() {
  const { posts, users, loading } = usePosts();
// search bar
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const [page, setPage] = useState(1);
  // Task 3: User Interaction
  const [favorites, setFavorites] = useState([]);

  const filtered = useMemo(() => {
    return posts.filter(p => {
      return (
        (!search || p.title.includes(search)) &&
        (!userId || p.userId === Number(userId))
      );
    });
  }, [posts, search, userId]);
// get paginated items
  const pageItems = paginate(filtered, page, PAGE_SIZE);

  if (loading) return <p>Cargando...</p>;


  return (
  
  <div className="container">
    <div className="header">
      <div>
        <h1>Frontend Technical Test</h1>
        <div className="muted">Posts + Search + Filter + Favorites + Pagination</div>
      </div>
      <span className="badge">Resultados: {filtered.length}</span>
    </div>

    <div className="panel toolbar">
      {/*search and filter components*/}
      <SearchBar value={search} onChange={setSearch} />
      <Filters users={users} onChange={setUserId} />
    </div>

    <div className="layout">
      <div className="grid">
         {/* Task 1: Data Fetching and Display  */}
      {/* Task 3: User Interaction and State Management - remove favorites. */}
        <PostList items={pageItems} favorites={favorites} onFavorite={setFavorites} />
        <Pagination
          page={page}
          total={Math.ceil(filtered.length / PAGE_SIZE)}
          onChange={setPage}
        />
      </div>

      <div className="panel">
        <Favorites items={favorites} />
      </div>
    </div>
  </div>
);
}


