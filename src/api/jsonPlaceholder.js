// consumo del api
const BASE_URL = "https://jsonplaceholder.typicode.com/";
// Task 1: Data Fetching and Display
export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}posts`);
  return response.json();
}

/* no aplica porque llama el api una vez por cada post

export async function fetchPostById(postId) {
  const response = await fetch(`${BASE_URL}posts/${postId}`);
  return response.json();*/

  // llama al user y si cumple con lo solicitado
  export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}