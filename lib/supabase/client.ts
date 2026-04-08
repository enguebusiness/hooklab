import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

// Storage basé sur les cookies pour que le serveur puisse lire la session
// Remplace le localStorage par défaut de Supabase
const cookieStorage = {
  getItem: (key: string): string | null => {
    if (typeof document === "undefined") return null;

    // Essayer le cookie direct
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = document.cookie.match(
      new RegExp(`(?:^|; )${escaped}=([^;]*)`)
    );
    if (match) return decodeURIComponent(match[1]);

    // Essayer les cookies chunked (.0, .1, .2, ...)
    const chunks: string[] = [];
    for (let i = 0; i < 10; i++) {
      const chunkMatch = document.cookie.match(
        new RegExp(`(?:^|; )${escaped}\\.${i}=([^;]*)`)
      );
      if (chunkMatch) {
        chunks.push(decodeURIComponent(chunkMatch[1]));
      } else {
        break;
      }
    }
    if (chunks.length > 0) return chunks.join("");

    return null;
  },

  setItem: (key: string, value: string): void => {
    if (typeof document === "undefined") return;

    // Supprimer les anciens cookies d'abord
    cookieStorage.removeItem(key);

    const maxChunkSize = 3500; // Limite cookie ~4KB avec overhead

    if (value.length <= maxChunkSize) {
      document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    } else {
      // Découper en chunks
      for (let i = 0; i * maxChunkSize < value.length; i++) {
        const chunk = value.substring(i * maxChunkSize, (i + 1) * maxChunkSize);
        document.cookie = `${key}.${i}=${encodeURIComponent(chunk)}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      }
    }
  },

  removeItem: (key: string): void => {
    if (typeof document === "undefined") return;
    document.cookie = `${key}=; path=/; max-age=0`;
    for (let i = 0; i < 10; i++) {
      document.cookie = `${key}.${i}=; path=/; max-age=0`;
    }
  },
};

// Client Supabase côté navigateur
// Utilise les cookies comme storage pour que le serveur puisse lire la session
export const createClient = () =>
  createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        storage: cookieStorage,
        flowType: "pkce",
      },
    }
  );
