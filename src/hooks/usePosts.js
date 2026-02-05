import { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../api/jsonPlaceholder";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
useEffect(() => {
    Promise.all([fetchPosts(), fetchUsers()]).then(([postsData, usersData]) => {
      setPosts(postsData);
      setUsers(usersData);
      setLoading(false);
    });
  }, []);

  return { posts, users, loading };
}