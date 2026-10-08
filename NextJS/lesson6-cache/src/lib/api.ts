// lib/api.ts
import { unstable_cache } from "next/cache";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export type Cached<T> = { data: T; fetchedAt: string };

const BASE_URL = "https://fakestoreapi.com";
const REVALIDATE_SECONDS = 60;

async function request<T>(path: string): Promise<Cached<T>> {
  const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return { data: (await res.json()) as T, fetchedAt: new Date().toISOString() };
}

// Funksiya yalnız cache boş və ya köhnə olanda işləyir
export const getProducts = unstable_cache(
  () => request<Product[]>("/products"),
  ["products"],
  { revalidate: REVALIDATE_SECONDS, tags: ["products"] },
);

export const getProduct = (id: number) =>
  unstable_cache(
    () => request<Product>(`/products/${id}`),
    ["product", String(id)], // hər id üçün ayrı cache açarı
    { revalidate: REVALIDATE_SECONDS, tags: ["products", `product-${id}`] },
  )();