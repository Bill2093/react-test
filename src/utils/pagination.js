//pagination for the list, displaying 10 items per page, revisar el archivo app.jsx linea 11 y 30
export function paginate(items, page, size) {
  return items.slice((page - 1) * size, page * size);
}
