import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function Filters({ users, userId, onChange }) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="user-filter-label">Usuario</InputLabel>
      <Select
        labelId="user-filter-label"
        label="Usuario"
        value={userId}
        onChange={(e) => onChange(e.target.value)}
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
