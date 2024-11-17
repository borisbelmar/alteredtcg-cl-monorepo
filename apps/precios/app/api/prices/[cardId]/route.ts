import PriceModel from "@repo/backend/models/price"
import connectToMongo from "@repo/backend/utils/connect-to-mongo"
import { priceSchema } from "@repo/schemas/price"

interface Props {
  params: {
    cardId: string
  }
}

export const POST = async (request: Request, { params }: Props) => {
  const { cardId } = params
  const payload = await request.json()
  
  const payloadWithData = {
    ...payload,
    game_id: cardId
  }

  const parsedPrice = priceSchema.parse(payloadWithData)

  await connectToMongo()

  const newPrice = new PriceModel(parsedPrice)

  await newPrice.save()

  return new Response(JSON.stringify(newPrice), { status: 201 })
}