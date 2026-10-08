// components/refresh-button.tsx
"use client";

import { useTransition } from "react";
import { refreshProducts } from "@/lib/actions";

export function RefreshButton() {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => refreshProducts())}
      disabled={pending}
      className="rounded bg-black px-3 py-1 text-sm text-white disabled:opacity-50"
    >
      {pending ? "Yenilənir..." : "Cache-i sıfırla"}
    </button>
  );
}