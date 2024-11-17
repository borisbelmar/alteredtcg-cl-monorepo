import CardModel from "@repo/backend/models/card"
import connectToMongo from "@repo/backend/utils/connect-to-mongo"

interface SearchQuery {
  name?: string
  faction?: string
  type?: string
  rarity?: string
}

interface MongoQuery {
  name?: { $regex: string, $options: string }
  faction?: { $in: string[] }
  type?: { $in: string[] }
  rarity?: { $in: string[] }
}

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const query: SearchQuery = Object.fromEntries(searchParams.entries())

  const mongoFilters: MongoQuery = {}

  if (query.name) {
    mongoFilters.name = { $regex: query.name, $options: "i" }
  }
  if (query.faction) {
    mongoFilters.faction = { $in: query.faction.split(',') }
  }
  if (query.type) {
    mongoFilters.type = { $in: query.type.split(',') }
  }
  if (query.rarity) {
    mongoFilters.rarity = { $in: query.rarity.split(',') }
  }
  
  await connectToMongo()

  // Cambiarlo por aggregate que haga lookup con la coleccion prices
  // Solo los ultimos 10 precios

  const aggregate = CardModel.aggregate([
    {
      $match: mongoFilters
    },
    {
      $lookup: {
        from: 'prices',
        localField: 'game_id',
        foreignField: 'game_id',
        as: 'prices'
      }
    },
    {
      $project: {
        _id: 0,
        game_id: 1,
        name: 1,
        faction: 1,
        type: 1,
        rarity: 1,
        imagePath: 1,
        prices: {
          $slice: ['$prices', -10]
        }
      }
    }
  ])

  const data = await aggregate.exec()

  return new Response(JSON.stringify(data), { status: 200 })
}