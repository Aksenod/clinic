import { Metadata } from "next"

export function generateSEOMetadata(data: {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}): Metadata {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : undefined,
      url: data.url,
    },
  }
}

export function formatPrice(priceInKopecks: number | null, priceFrom: boolean = false): string {
  if (!priceInKopecks) return "По запросу"
  const rubles = Math.floor(priceInKopecks / 100)
  return priceFrom ? `от ${rubles.toLocaleString("ru-RU")} ₽` : `${rubles.toLocaleString("ru-RU")} ₽`
}
