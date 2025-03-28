/* eslint-disable @next/next/no-img-element */
import EventItem from "./eventItem";

const pastEvents = [
  {
    image: "/liga-fecha-12.webp",
    title: "Liga CL Fecha #16",
    date: "Domingo 16 de Febrero",
    time: "21:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=364273"
  },
  {
    image: "/liga-fecha-11.webp",
    title: "Liga CL Fecha #15",
    date: "Domingo 09 de Febrero",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=362855"
  },
  {
    image: "/liga-fecha-10.webp",
    title: "Liga CL Fecha #14",
    date: "Domingo 02 de Febrero",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=361040"
  },
  {
    image: "/liga-fecha-9.webp",
    title: "Liga CL Fecha #13",
    date: "Domingo 26 de Enero",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=358948"
  },
  {
    image: "/liga-fecha-8.webp",
    title: "Liga CL Fecha #12",
    date: "Domingo 19 de Enero",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=357101"
  },
  {
    image: "/liga-fecha-7.webp",
    title: "Liga CL Fecha #11",
    date: "Domingo 12 de Enero",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=355260"
  },
  {
    image: "/liga-fecha-6.webp",
    title: "Liga CL Fecha #10",
    date: "Domingo 05 de Enero",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=353485"
  },
  {
    image: "/liga-fecha-5.webp",
    title: "Liga CL Fecha #9",
    date: "Domingo 29 de Diciembre",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=350989"
  },
  {
    image: "/liga-fecha-4.webp",
    title: "Liga CL Fecha #8",
    date: "Domingo 15 de Diciembre",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=347278"
  },
  {
    image: "/liga-fecha-3.webp",
    title: "Liga CL Fecha #7",
    date: "Domingo 1 de Diciembre",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=343673"
  },
  {
    image: "/liga-fecha-2.webp",
    title: "Liga CL Fecha #6",
    date: "Domingo 24 de Noviembre",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=341463"
  },
  {
    image: "/liga-fecha-1.webp",
    title: "Liga CL Fecha #5",
    date: "Domingo 17 de Noviembre",
    time: "20:00 hrs",
    tournamentLink: "http://boardgamearena.com/tournament?id=340336",
    suddenDeathLink: "https://boardgamearena.com/tournament?id=340362"
  }
]

export default function NextDates () {
  return (
    <div className="flex flex-col gap-2 max-w-6xl w-full mx-auto px-8 py-16">
      <h2 className="text-2xl font-bold">Próximas Fechas</h2>
      <img src="/separator-half.png" alt="Separator" className="w-52 h-0.5 mb-4" width={250} height={5} />
      <EventItem
        image="/liga-fecha-1.webp"
        title="Liga CL Fecha #17"
        date="Domingo 17 de Febrero"
        time="21:00 hrs"
        buttonLabel="Inscríbete ahora en BGA"
        tournamentLink="http://boardgamearena.com/tournament?id=366199&token=BiVaIy2Vc8oZ6XF7A0ebo0cQL4CRMM2o"
      />
      <h2 className="text-2xl font-bold mt-8">Fechas Pasadas</h2>
      <img src="/separator-half.png" alt="Separator" className="w-52 h-0.5 mb-4" width={250} height={5} />
      <div className="flex flex-col gap-4">
        {pastEvents.map(event => (
          <EventItem
            {...event}
            key={event.title}
          />
        ))}
      </div>
    </div>
  )
}