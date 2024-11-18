import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fs from 'fs'
import csv from 'csv-parser'

dotenv.config()

const fromCsv = async () => {
  const results: Record<string, unknown>[] = [];

  fs.createReadStream('precios.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      mongoose.connect(process.env.MONGO_URI!).then(async () => {
        console.log('Connected to db')
        const PriceModel = await import('@repo/backend/models/price')
        const promises = results.map(async (result) => {
          const price = new PriceModel.default({
            game_id: result.game_id,
            price: Number(result.price),
            reason: ''
          })
          await price.save()
        })
        await Promise.all(promises)
        console.log('Altered cards saved to db')
      })
    });
}

fromCsv()
