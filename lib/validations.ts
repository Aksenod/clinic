import { z } from "zod"

export const serviceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  shortDesc: z.string().optional(),
  description: z.string().optional(),
  price: z.number().nullable(),
  priceFrom: z.boolean().default(false),
  directionId: z.string(),
  // ... остальные поля
})

export const directionSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  // ...
})

// Добавьте другие схемы валидации по необходимости
