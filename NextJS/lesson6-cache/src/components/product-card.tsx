// components/product-card.tsx
import Link from "next/link";
import type { Product } from "@/lib/api";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col gap-3 rounded-lg border p-4 transition hover:shadow-md"
    >

      <h3 className="line-clamp-2 text-sm font-medium">{product.title}</h3>
      <p className="font-semibold">${product.price.toFixed(2)}</p>
    </Link>
  );
}