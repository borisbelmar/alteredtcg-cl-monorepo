import { z } from 'zod'

export const priceSchema = z.object({
  game_id: z.string(),
  price: z.number(),
  reason: z.string().optional().default('')
})

export type Price = z.infer<typeof priceSchema>
