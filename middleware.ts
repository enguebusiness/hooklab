import { updateSession } from "@/lib/supabase/middleware";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Routes protégées
    "/dashboard/:path*",
    "/formations/:path*",
    "/profil/:path*",
    // Routes auth (redirection si déjà connecté)
    "/login",
    "/register",
  ],
};
