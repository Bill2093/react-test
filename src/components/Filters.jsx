// MUI icono para borrar la barra de busqueda (X) 
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

export default function Filters({ users, userId, onChange }) {
  const showClear = Boolean(userId);

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="user-filter-label">Usuario</InputLabel>
      <Select
        labelId="user-filter-label"
        label="Usuario"
        value={userId}
        onChange={(e) => onChange(e.target.value)}
        input={
          <OutlinedInput
            label="Usuario"
            endAdornment={
              showClear ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Borrar filtro de usuario"
                    edge="end"
                    size="small"
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onClick={() => onChange("")}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : undefined
            }
          />
        }
      >
        <MenuItem value="">Todos</MenuItem>
        {users.map((user) => (
          <MenuItem key={user.id} value={String(user.id)}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
