// app/products/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getProduct, getProducts } from "@/lib/api";
import { CacheInfo } from "@/components/cache-info";

export async function generateStaticParams() {
  const { data } = await getProducts();
  return data.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product, fetchedAt } = await getProduct(Number(id));

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-4 p-6">
      <Link href="/" className="text-sm underline">
        Geri
      </Link>
      <CacheInfo fetchedAt={fetchedAt} />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
    </main>
  );
}