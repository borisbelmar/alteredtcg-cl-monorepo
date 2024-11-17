import { z } from 'zod'

export const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  scopes: z.map(z.string(), z.number()).optional().default(new Map())
})

export type User = z.infer<typeof userSchema>

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export type Login = z.infer<typeof loginSchema>
