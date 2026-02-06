import { Pagination as MuiPagination, Stack } from "@mui/material";

export default function Pagination({ page, total, onChange }) {
  return (
    <Stack alignItems="center">
      <MuiPagination
        page={page}
        count={Math.max(1, total)}
        onChange={(_, value) => onChange(value)}
        color="primary"
      />
    </Stack>
  );
}
