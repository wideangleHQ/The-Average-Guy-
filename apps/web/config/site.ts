// Typed access to public runtime config. Server-only secrets do not belong here.
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "The Average Guy",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "",
} as const;
