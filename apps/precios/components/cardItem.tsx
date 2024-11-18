import { FACTIONS } from "@repo/schemas/card"
import { CardResponse } from "../app/page"
import Image from "next/image"

interface CardItemInterface {
  card: CardResponse
}

export default function CardItem ({ card }: CardItemInterface) {
  return (
    <div
      className="border rounded-lg flex flex-col overflow-hidden min-h-64 w-full"
      style={{
        borderColor: FACTIONS[card.faction]?.color
      }}
    >
      <div className="flex justify-between p-2 gap-1 items-center relative" style={{
        backgroundColor: FACTIONS[card.faction]?.color,
      }}>
        <i className={`fa-kit fa-${card.faction.toLowerCase()} text-base sm:text-lg absolute`} aria-hidden="true"></i>
        <h3 className="text-xs sm:text-sm text-center w-full whitespace-nowrap text-ellipsis">
          {card.name}
        </h3>
      </div>
      <div className="p-2 sm:p-3">
        <Image
          src={card.imagePath}
          alt={card.name}
          className="w-full object-cover rounded-lg"
          width={480}
          height={670}
          loading="lazy"
        />
      </div>
      <div className="flex justify-between p-2" style={{
        backgroundColor: FACTIONS[card.faction]?.color
      }}>
        <strong className="text-xs sm:text-lg text-center w-full">
          ${card.prices?.[0]?.price ?? 500} CLP
        </strong>
      </div>
    </div>
  )
}