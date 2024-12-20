/* eslint-disable @next/next/no-img-element */
import CardModel from "@repo/backend/models/card"
import connectToMongo from "@repo/backend/utils/connect-to-mongo"
import { Card, FACTIONS } from '@repo/schemas/card'
import CardList from "../components/cardList"
import Image from "next/image"

export type CardResponse = Card & {
  prices: { price: number }[]
  _id: string
  faction: keyof typeof FACTIONS
}

export const revalidate = 60 * 60 * 12

export default async function Page () {
  await connectToMongo()

  const aggregate = CardModel.aggregate([
    {
      $match: {
        type: {
          $in: ['CHARACTER', 'SPELL', 'PERMANENT']
        }
      }
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

  const data: CardResponse[] = await aggregate.exec()

  return (
    <div className="bg-zinc-900 pt-12 pb-8">
      <div className="text-center flex flex-col max-w-6xl mx-auto items-center justify-between gap-8 px-8 mb-8">
        <Image src="/altered-cl-white.png" width={200} height={200} alt="Altered CL" />
        <h1 className="sm:text-3xl text-lg max-w-6xl mx-auto px-4 sm:px-8 font-bold">
          Referencia de precios Singles Altered TCG
        </h1>
        <p className="text-xs sm:text-sm max-w-6xl mx-auto px-4 sm:px-8">
          El siguiente listado muestra <strong>precios referenciales</strong> de cartas basados en los precios que se manejan dentro de la comunidad nacional como internacional para los singles de Altered TCG. Los precios son definidos por vendedores y compradores de manera libre y esta lista solo busca ser una referencia para los jugadores, por lo que los precios pueden variar dependiendo de la condición de la carta, la demanda y la oferta. Como comunidad, nuestra misión es fomentar el juego y la diversión, por lo que te invitamos a que siempre busques la mejor opción para ti y tu bolsillo. Si tienes alguna duda o sugerencia, no dudes en contactarnos a través de los diferentes grupos de redes sociales con los que contamos. Esperamos que esto sea de utilidad para ti.
        </p>
        <p className="text-xs sm:text-sm max-w-6xl mx-auto px-4 sm:px-8">
          <strong className="font-bold">Nota:</strong> Los precios mostrados son para el mercado chileno y están en pesos. Ni los precios ni este sitio web son oficiales de Altered TCG o tienen relación alguna con Asmodee o Equinox, solo es una herramienta de la comunidad para la comunidad.
        </p>
        <p className="text-xs sm:text-sm max-w-6xl mx-auto px-4 sm:px-8">
          <strong className="font-bold">Sobre las cartas únicas:</strong> El precio de las cartas únicas actualmente es muy difícil de estimar, por lo que no se incluyen en esta lista. Si tienes alguna duda sobre el precio de una carta única, te recomendamos consultar en grupos, Discord o con tu comunidad local.
        </p>
        <p className="text-xs sm:text-sm max-w-6xl mx-auto px-4 sm:px-8">
          Desarrollado y mantenido con ❤️ por <strong className="font-bold">Altered TCG Chile</strong> y <a className="font-bold hover:underline" href="https://linktr.ee/alterados.tcg" target="_blank" rel="noopener noreferrer">Alterados TCG</a>.
        </p>
      </div>
      <CardList cards={data} />
    </div>
  )
}