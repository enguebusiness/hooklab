import { clsx, type ClassValue } from "clsx";

// Utilitaire pour combiner les classes CSS (compatible Tailwind)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Formater un prix en euros
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount / 100);
}

// Valider un email
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// URL de base de l'application
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  return "http://localhost:3000";
}
