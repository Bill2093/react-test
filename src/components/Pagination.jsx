export default function Pagination({ page, total, onChange }) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  if (total <= 1) {
    return null;
  }

  return (
    <nav>
      <button type="button" onClick={() => onChange(page - 1)} disabled={page <= 1}>
        Anterior
      </button>
      {pages.map(pageNumber => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onChange(pageNumber)}
          disabled={pageNumber === page}
        >
          {pageNumber}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
      >
        Siguiente
      </button>
    </nav>
  );
}
