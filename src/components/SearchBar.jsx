// Task 2: Search and Filtering, linea 15 y 47

import CloseIcon from "@mui/icons-material/Close";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default function SearchBar({ value, onChange }) {
  // Mostrar el botón de borrar solo si hay texto en el campo de búsqueda
  const showClear = Boolean(value);

  return (
    <TextField
      label="Buscar"
      placeholder="Buscar por título o contenido..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        endAdornment: showClear ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="Borrar búsqueda"
              edge="end"
              size="small"
              onClick={() => onChange("")}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      fullWidth
      size="small"
    />
  );
}

