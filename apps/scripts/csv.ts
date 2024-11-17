import mongoose from 'mongoose'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

export default async function getCardsCsv() {
  mongoose.connect(process.env.MONGO_URI!).then(async () => {
    console.log('Connected to db')
    const CardModel = await import('@repo/backend/models/card')
    const cards = await CardModel.default.find()

    const csv = cards.map(card => {
      return `${card.game_id};${card.name};${card.faction};${card.type};${card.rarity}`
    }).join('\n')

    const headers = 'game_id;name;faction;type;rarity;price\n'
    const csvWithHeaders = headers + csv

    fs.writeFileSync('cards.csv', csvWithHeaders)
    process.exit()
  })
}

getCardsCsv()
