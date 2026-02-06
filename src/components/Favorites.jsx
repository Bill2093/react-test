import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export default function Favorites({ items, onRemove }) {
  if (items.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No has agregado favoritos.
      </Typography>
    );
  }

  return (
    <List dense sx={{ width: "100%" }}>
      {items.map((p) => (
        <ListItem key={p.id} divider sx={{ px: 0 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <ListItemText primary={p.title} secondary={`Post #${p.id}`} />
            <Button
              color="error"
              variant="text"
              size="small"
              onClick={() => onRemove(p.id)}
            >
              Quitar
            </Button>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}