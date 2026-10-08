// lib/actions.ts
"use server";

import { revalidateTag } from "next/cache";

export async function refreshProducts() {
  revalidateTag("products", "max");
}