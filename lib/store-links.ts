/**
 * Enlaces a las tiendas. Se configuran por entorno al desplegar la landing
 * (ver .env.example). Mientras una tienda no tenga URL, su botón se muestra
 * como "Muy pronto" y no navega.
 */
export const STORE_LINKS = {
  ios: process.env.NEXT_PUBLIC_APP_STORE_URL || "",
  android: process.env.NEXT_PUBLIC_PLAY_STORE_URL || "",
} as const

export type StorePlatform = keyof typeof STORE_LINKS
