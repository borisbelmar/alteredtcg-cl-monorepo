import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 md:px-16 flex-1 my-16 gap-8">
      <h3 className="text-xl sm:text-2xl font-bold">
        Sobre nosotros
      </h3>
      <Image src="/altered-cl-white.png" alt="Altered TCG Chile" width={250} height={250} />
      <p className="text-sm sm:text-lg  text-center mt-2">
        Altered TCG Chile es una comunidad de jugadores de que busca fomentar la competencia y el juego en la región. Organizamos torneos, eventos y actividades para la comunidad de jugadores de Altered TCG en Chile.
      </p>
    </div>
  )
}
