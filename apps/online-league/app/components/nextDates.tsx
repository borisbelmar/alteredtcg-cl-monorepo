import Image from "next/image";

export default function NextDates () {
  return (
    <div className="flex flex-col gap-2 max-w-6xl w-full mx-auto px-8 py-16">
      <h2 className="text-2xl font-bold">Próxima Fecha</h2>
      <Image src="/separator-half.png" alt="Separator" className="w-52 h-0.5 rotate-180 mb-8" width={250} height={5} />
      <div className="flex flex-col sm:flex-row gap-4 border rounded-lg overflow-hidden bg-sky-950">
        <div className="relative">
          <Image src="/liga-fecha-1.webp" className="sm:w-48" alt="Liga Fecha 1" width={900} height={500} />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l to-sky-950/0 from-sky-950"/>
        </div>
        <div className="flex justify-between flex-1 flex-col sm:flex-row">
          <div className="flex flex-col p-4 justify-center whitespace-nowrap">
            <h3 className="text-xl font-bold">Liga CL 5ta Fecha</h3>
            <p className="text-sm">Domingo 17 de Noviembre</p>
            <p className="text-sm">20:00 hrs</p>
          </div>
          <div className="flex flex-col p-4 justify-center gap-2">
            <a
              className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors whitespace-nowrap text-center"
              href="http://boardgamearena.com/tournament?id=340336&token=mA41l1YYzaERGt9VLHRoNAevb9ANDAbI"
              target="_blank"
              rel="noreferrer"
            >
              Inscribirme en BGA
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}