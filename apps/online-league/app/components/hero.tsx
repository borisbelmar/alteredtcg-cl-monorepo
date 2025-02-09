import CornerAltered from "@repo/ui/corner-altered";
import Image from "next/image";
import './gradient.css'

export default function Hero () {
  return (
    <div
      className="min-h-[80vh] w-full relative flex items-center justify-center flex-1"
      style={{
        backgroundImage: "url(/bg-liga-online.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div id="gradient" className="absolute w-full h-full top-0 left-0" />
      <CornerAltered className="absolute bottom-0 left-0 w-[40vw] max-w-64 m-4 [transform:rotateZ(180deg)]" />
      <CornerAltered className="absolute bottom-0 right-0 w-[40vw] max-w-64 m-4 [transform:rotateZ(180deg)_rotateY(180deg)]" />
      <div className="flex flex-col md:flex-row justify-center items-center px-16 z-10 max-w-6xl mx-auto text-center md:text-left gap-8 mb-16">
        <Image src="/logo-alterados.png" alt="Circuito Altered TCG Chile" width={250} height={250} className="shrink-0" />
        <div>
          <h1 className="text-xl md:text-4xl sm:text-3xl font-bold text-white mb-2">
            Liga Online CL
          </h1>
          <h2 className="text-xs sm:text-base text-white">
            Todos los domingos a las 20:00 hrs en BGA.
          </h2>
          <p className="text-sm sm:text-lg text-white my-8">
            La liga online de Altered TCG Chile es un torneo semanal <strong>gratuito</strong> que se juega a través de la plataforma <strong>BGA</strong> que busca fomentar la competencia y el juego en la región. <strong>2 sobres de premio para el ganador de cada fecha</strong>.
          </p>
          <a
            className="bg-sky-500 text-white font-bold px-6 py-4 rounded-lg hover:bg-sky-600 transition-colors whitespace-nowrap text-center"
            href="http://boardgamearena.com/tournament?id=362233&token=9auEiCBZfBbUNYZ6LeswjYjiOtBYCddX"
            target="_blank"
            rel="noreferrer"
          >
            Inscríbete para la fecha #15
          </a>
        </div>
      </div>
    </div>
  )
}