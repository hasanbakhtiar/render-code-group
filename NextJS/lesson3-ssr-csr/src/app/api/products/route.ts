import { laptops } from "@/data/product";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return new Response(JSON.stringify(laptops), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

