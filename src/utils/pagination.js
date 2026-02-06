export function paginate(items, page, size) {
  return items.slice((page - 1) * size, page * size);
}