/* eslint-disable @next/next/no-img-element */

interface EventItemProps {
  image: string
  title: string
  date: string
  time: string
  tournamentLink: string
  suddenDeathLink?: string
  buttonLabel?: string
}

export default function EventItem ({
  image,
  title,
  date,
  time,
  tournamentLink,
  suddenDeathLink,
  buttonLabel
}: EventItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border rounded-lg overflow-hidden bg-sky-950">
      <div className="relative">
        <img src={image} className="sm:w-48" alt={title} width={500} height={500} />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l to-sky-950/0 from-sky-950"/>
      </div>
      <div className="flex justify-between flex-1 flex-col sm:flex-row">
        <div className="flex flex-col p-4 justify-center whitespace-nowrap">
          <h3 className="text-xl font-bold">
            {title}
          </h3>
          <p className="text-sm">
            {date}
          </p>
          <p className="text-sm">
            {time}
          </p>
        </div>
        <div className="flex flex-col p-4 justify-center gap-2">
          <a
            className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors whitespace-nowrap text-center"
            href={tournamentLink}
            target="_blank"
            rel="noreferrer"
          >
            {buttonLabel || "Ver Torneo en BGA"}
          </a>
          {suddenDeathLink && (
            <a
              className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors whitespace-nowrap text-center"
              href={suddenDeathLink}
              target="_blank"
              rel="noreferrer"
            >
              Ver Torneo Bala de Desempate
            </a>
          )}
        </div>
      </div>
    </div>
  )
}