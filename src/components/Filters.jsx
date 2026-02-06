export default function Filters({ users, onChange }) {
  return (
    <label>
      Usuario:
      <select onChange={event => onChange(event.target.value)}>
        <option value="">Todos</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </label>
  );
}
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

const lengthOptions = [
  { value: "", label: "Todos" },
  { value: "short", label: "Corto (< 120 caracteres)" },
  { value: "medium", label: "Medio (120-199 caracteres)" },
  { value: "long", label: "Largo (200+ caracteres)" },
];

export default function Filters({
  users,
  userId,
  onUserChange,
  lengthFilter,
  onLengthChange,
}) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%" }}>
      <FormControl fullWidth size="small">
        <InputLabel id="user-filter-label">Usuario</InputLabel>
        <Select
          labelId="user-filter-label"
          label="Usuario"
          value={userId}
          onChange={(e) => onUserChange(e.target.value)}
        >
          <MenuItem value="">Todos</MenuItem>
          {users.map((u) => (
            <MenuItem key={u.id} value={String(u.id)}>
              {u.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel id="length-filter-label">Longitud</InputLabel>
        <Select
          labelId="length-filter-label"
          label="Longitud"
          value={lengthFilter}
          onChange={(e) => onLengthChange(e.target.value)}
        >
          {lengthOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}