import CornerAltered from "@repo/ui/corner-altered"
import Image from "next/image"
import './gradient.css'

export default function Page () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-neutral-900">
      <div
        className="min-h-[80vh] w-full relative flex items-center justify-center flex-1"
        style={{
          backgroundImage: "url(/bg-circuit.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div id="gradient" className="absolute w-full h-full top-0 left-0" />
          <CornerAltered className="absolute bottom-0 left-0 w-[40vw] max-w-64 m-4 [transform:rotateZ(180deg)]" />
          <CornerAltered className="absolute bottom-0 right-0 w-[40vw] max-w-64 m-4 [transform:rotateZ(180deg)_rotateY(180deg)]" />
          <div className="flex flex-col items-center justify-center px-16 z-10">
            <Image src="/circuito-altered-logo.png" alt="Circuito Altered TCG Chile" width={180} height={180} />
            <h1 className="text-xl sm:text-3xl font-bold text-white text-center mt-8 mb-2">
              Circuito Competitivo Altered TCG Chile
            </h1>
            <h2 className="text-lg sm:text-xl text-white text-center mb-8">
              Temporada 2024 - 2025
            </h2>
            <p className="text-sm sm:text-lg text-white text-center mt-2">
              El circuito competitivo de Altered TCG en Chile es una iniciativa impulsada por la comunidad de jugadores de Altered TCG en Chile para fomentar la competencia y el juego en la región.
            </p>
          </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full px-8 md:px-16 flex-1 my-16 gap-16 md:gap-0">
        <div className="flex gap-8 items-center flex-col-reverse md:flex-row">
          <Image className="px-16 md:px-0" src="/brushed-amarok.png" alt="Brushed Amarok" width={480} height={480} />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Temporada 2024 - 2025
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-500 to-blue-950" />
            <p className="text-sm sm:text-lg text-white">
              Esta temporada del Circuito Competitivo de Altered TCG en Chile se llevará a cabo en distintas locaciones a lo largo del país. Los torneos serán presenciales y online, y contarán con premios en efectivo y productos de la marca. ¡Participa! ¡Juega! ¡Gana!
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center flex-col md:flex-row">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              De la Comunidad para la Comunidad
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r to-sky-500 from-blue-950" />
            <p className="text-sm sm:text-lg text-white">
              El Circuito Competitivo de Altered TCG en Chile es una iniciativa de la comunidad de jugadores de Altered TCG en Chile para fomentar la competencia y el juego en la región. Los torneos son organizados por jugadores para jugadores, y cuentan con el apoyo de diferentes tiendas adheridas al circuito.
            </p>
          </div>
          <Image className="px-16 md:px-0" src="/brushed-trickster.png" alt="Brushed Trickster" width={480} height={480} />
        </div>
      </div>
      <footer className="w-full text-center text-white py-4 text-xs self-end">
        <p>
          © 2024 - Desarrollado con ❤️ por <strong>Boris Belmar</strong> de <strong>Alterados TCG</strong> - <strong>Altered</strong> es una marca registrada de <strong>Equinox</strong>.
        </p>
      </footer>
    </div>
  )
}