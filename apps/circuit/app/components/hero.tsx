import CornerAltered from "@repo/ui/corner-altered";
import Image from "next/image";
import './gradient.css'

export default function Hero () {
  return (
    <div
      className="min-h-[80vh] w-full relative flex items-center justify-center flex-1"
      style={{
        backgroundImage: "url(/bg-circuit.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div id="gradient" className="absolute w-full h-full top-0 left-0" />
      <CornerAltered className="absolute bottom-0 left-0 w-[40vw] max-w-64 m-4 [transform:rotateZ(180deg)]" />
      <CornerAltered className="absolute bottom-0 right-0 w-[40vw] max-w-64 m-4 [transform:rotateZ(180deg)_rotateY(180deg)]" />
      <div className="flex flex-col items-center justify-center px-16 z-10 max-w-6xl mx-auto">
        <Image src="/circuito-altered-logo.png" alt="Circuito Altered TCG Chile" width={180} height={180} />
        <h1 className="text-xl sm:text-3xl font-bold text-white text-center mt-8 mb-2">
          Circuito Competitivo Altered TCG Chile
        </h1>
        <h2 className="text-lg sm:text-xl text-white text-center mb-8">
          Temporada 2024 - 2025
        </h2>
        <p className="text-sm sm:text-lg text-white text-center mt-2">
          El circuito competitivo de Altered TCG en Chile nace con el objetivo de incentivar el sector competitivo del juego, fomentando instancias comunitarias en la que jugadores de diferentes comunidades puedan participar en conjunto
        </p>
      </div>
    </div>
  )
}