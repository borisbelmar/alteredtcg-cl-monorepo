import Image from "next/image";

export default function Info () {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 md:px-16 flex-1 my-16 gap-16 md:gap-0">
      <div className="flex gap-8 items-center flex-col-reverse md:flex-row">
        <Image className="px-16 md:px-0" src="/brushed-amarok.png" alt="Brushed Amarok" width={480} height={480} />
        <div className="flex flex-col gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Temporada 2024 - 2025
          </h3>
          <Image src="/separator-half.png" alt="Separator" className="w-52 h-0.5 rotate-180" width={250} height={5} />
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
          <Image src="/separator-half.png" alt="Separator" className="w-52 h-0.5" width={250} height={5} />
          <p className="text-sm sm:text-lg text-white">
            El Circuito Competitivo de Altered TCG en Chile es una iniciativa de la comunidad de jugadores de Altered TCG en Chile para fomentar la competencia y el juego en la región. Los torneos son organizados por jugadores para jugadores, y cuentan con el apoyo de diferentes tiendas adheridas al circuito.
          </p>
        </div>
        <Image className="px-16 md:px-0" src="/brushed-trickster.png" alt="Brushed Trickster" width={480} height={480} />
      </div>
    </div>
  )
}