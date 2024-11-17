import { z } from 'zod'

export const FACTIONS = {
  AX: {
    name: 'Axiom',
    slug: 'ax',
    color: '#8c432a'
  },
  BR: {
    name: 'Bravos',
    slug: 'br',
    color: '#c32637'
  },
  OR: {
    name: 'Ordis',
    slug: 'or',
    color: '#0f6593'
  },
  LY: {
    name: 'Lyra',
    slug: 'ly',
    color: '#cf4171'
  },
  MU: {
    name: 'Muna',
    slug: 'mu',
    color: '#3d6b42'
  },
  YZ: {
    name: 'Yzmir',
    slug: 'yz',
    color: '#764891'
  }
} as const

export const TYPES = {
  TOKEN: {
    name: 'Token',
    slug: 'token'
  },
  CHARACTER: {
    name: 'Character',
    slug: 'character'
  },
  SPELL: {
    name: 'Spell',
    slug: 'spell'
  },
  PERMANENT: {
    name: 'Permanent',
    slug: 'permanent'
  },
  HERO: {
    name: 'Hero',
    slug: 'hero'
  }
} as const

export const RARITIES = {
  COMMON: {
    name: 'Common',
    slug: 'common'
  },
  RARE: {
    name: 'Rare',
    slug: 'rare'
  },
  UNIQUE: {
    name: 'Unique',
    slug: 'unique'
  }
} as const

const FACTION_KEYS = Object.keys(FACTIONS) as [string, ...string[]]
const TYPE_KEYS = Object.keys(TYPES) as [string, ...string[]]
const RARITY_KEYS = Object.keys(RARITIES) as [string, ...string[]]

export const CardSchema = z.object({
  game_id: z.string(),
  name: z.string(),
  rarity: z.enum(RARITY_KEYS),
  imagePath: z.string(),
  faction: z.enum(FACTION_KEYS),
  type: z.enum(TYPE_KEYS)
})

export type Card = z.infer<typeof CardSchema>
