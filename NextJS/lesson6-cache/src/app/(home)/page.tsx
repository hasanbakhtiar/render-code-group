// app/(home)/page.tsx
import { getProducts } from "@/lib/api";
import { ProductCard } from "@/components/product-card";
import { CacheInfo } from "@/components/cache-info";
import { RefreshButton } from "@/components/refresh-button";

export default async function HomePage() {
  const { data: products, fetchedAt } = await getProducts();

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="flex items-center justify-between gap-4">
        <CacheInfo fetchedAt={fetchedAt} />
        <RefreshButton />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}