// Task 2: Search and Filtering, linea 15 y 47

import { TextField } from "@mui/material";

export default function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Buscar"
      placeholder="Buscar por título o contenido..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      size="small"
    />
  );
}
