import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 text-gray-100">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="px-3 py-1 rounded bg-gray-800 border border-gray-700"
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 rounded text-sm transition ${
            p === page
              ? "bg-amber-500 text-white"
              : "bg-gray-800 border border-gray-700"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        className="px-3 py-1 rounded bg-gray-800 border border-gray-700"
      >
        Next
      </button>
    </div>
  );
}
