import { sanityClient } from "./client";

export interface PortfolioItem {
  _id: string;
  title: string;
  result: string;
  image: unknown;
  slug: string;
}

export interface SiteSettings {
  ownerName: string;
  ownerBio: string;
  ownerPhoto: unknown;
  address: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch(
      `*[_type == "portfolio"] | order(orderRank asc) { _id, title, result, image, "slug": slug.current }`
    );
  } catch {
    return [];
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch(
      `*[_type == "siteSettings"][0] { ownerName, ownerBio, ownerPhoto, address, phone, email, lat, lng }`
    );
  } catch {
    return null;
  }
}
