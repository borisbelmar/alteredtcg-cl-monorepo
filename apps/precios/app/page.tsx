/* eslint-disable @next/next/no-img-element */
/* eslint-disable turbo/no-undeclared-env-vars */
import { Card, FACTIONS } from '@repo/schemas/card'
import CardList from "../components/cardList"
import {
  S3Client,
  GetObjectCommand
} from '@aws-sdk/client-s3'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from 'axios';
import { parse } from "csv-parse/sync";

export type CardResponse = Card & {
  price: string
  faction: keyof typeof FACTIONS
}

export const revalidate = 60 * 60 * 12

const S3 = new S3Client({
  region: "auto",
  endpoint: process.env.S3_ACCOUNT as string,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET as string
  },
});

export default async function Page () {
  const signedUrl = await getSignedUrl(
    S3,
    new GetObjectCommand({ Bucket: "alteredtcg", Key: "precios/1735338210500.csv" }),
    { expiresIn: 3600 },
  )

  const { data: csvData } = await axios.get(signedUrl)

  const data: string[][] = parse(csvData, {
    delimiter: ','
  })

  const [headers, ...restData] = data

  const objectData: CardResponse[] = restData.map(record => {
    const obj: Record<string, string> = {}
    headers?.forEach((key, idx) => {
      obj[key] = record[idx] as string
    })
    return obj
  }).filter(
    v => (
      ['SPELL', 'PERMANENT', 'CHARACTER'].includes(v.type as string) &&
      ['RARE'].includes(v.rarity as string)
    )) as unknown as CardResponse[]

  return (
    <div className="bg-zinc-900 pt-12 pb-8">
      <div className="text-center flex flex-col max-w-6xl mx-auto items-center justify-between gap-8 px-8 mb-8">
        <img src="/altered-cl-white.png" width={200} height={200} alt="Altered CL" />
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
      <CardList cards={objectData} />
    </div>
  )
}