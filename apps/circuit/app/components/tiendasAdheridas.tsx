import Image from "next/image"
import { useMemo } from "react"

export default function TiendasAdheridas () {
  const adheridos = useMemo(() => [
    {
      name: "El Reino de los Duelos",
      link: "https://elreinodelosduelos.cl/",
      logo: "/adheridos/el-reino-de-los-duelos.png"
    },
    {
      name: "Alterados TCG",
      link: "https://linktr.ee/alterados.tcg",
      logo: "/adheridos/alterados-tcg.png"
    },
    {
      name: "La Ruca de Galvarino",
      link: "https://www.instagram.com/larucadegalvarino/",
      logo: "/adheridos/la-ruca-de-galvarino.png"
    },
    {
      name: "One Up",
      link: "https://www.oneupstore.cl/",
      logo: "/adheridos/one-up.png"
    },
    {
      name: "Aldea Juegos",
      link: "https://linktr.ee/aldeajuegos",
      logo: "/adheridos/aldea-juegos.png"
    },
    {
      name: "El Calabozo",
      link: "https://www.calabozotienda.cl/",
      logo: "/adheridos/el-calabozo.png"
    },
    {
      name: "Freek",
      link: "https://www.instagram.com/comunidadfreek",
      logo: "/adheridos/freek.png"
    },
    {
      name: "La Madriguera",
      link: "https://tiendalamadriguera.cl/",
      logo: "/adheridos/la-madriguera.png"
    },
    {
      name: "Puente Elantris",
      link: "https://www.puenteelantris.cl/",
      logo: "/adheridos/puente-elantris.png"
    },
    {
      name: "Tentami",
      link: "https://tentami.cl/",
      logo: "/adheridos/tentami.png"
    },
    {
      name: "Zona X Gamers",
      link: "https://zonaxgamers.cl/",
      logo: "/adheridos/zona-x-gamers.png"
    },
    {
      name: "Demente",
      link: "https://dementegames.cl/",
      logo: "/adheridos/demente.png"
    }
  ].sort(() => Math.random() - 0.5), [])

  return (
    <div className="flex flex-col items-center justify-center text-center mt-16 mb-8 px-4 max-w-6xl mx-auto">
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">
          Tiendas y Comunidades Adheridas
        </h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {adheridos.map(({ name, link, logo }) => (
            <a key={name} href={link} target="_blank" rel="noopener noreferrer">
              <Image key={name} src={logo} alt={name} width={160} height={160} quality={100} />
            </a>
          ))}
        </div>
      </div>
  )
}