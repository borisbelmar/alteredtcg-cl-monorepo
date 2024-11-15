'use client'

import Image from "next/image";
import { motion } from "motion/react"

export default function Info () {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 md:px-16 flex-1 my-16 gap-16 md:gap-0 max-w-6xl mx-auto">
      <motion.div
        className="flex gap-8 items-center flex-col-reverse md:flex-row"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-250px" }}
      >
        <Image className="px-16 md:px-0 relative -left-24" src="/brushed-amarok.png" alt="Brushed Amarok" width={480} height={480} />
        <div className="flex flex-col gap-3 relative">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Temporada 2024 - 2025
          </h3>
          <Image src="/separator-half.png" alt="Separator" className="w-52 h-0.5 rotate-180" width={250} height={5} />
          <p className="text-sm sm:text-lg text-white">
            Nuestra primera temporada comienza en Diciembre de este año, finalizando en Marzo de 2025. Durante estos cuatro meses, los jugadores de las diferentes regiones del país podrán optar por clasificar al torneo principal. Para ello, deberán juntar puntos en las ligas semanales en sus tiendas preferidas o participar en los eventos principales que organicen las mismas. Asi, los clasificados podrán optar por adquirir la entrada al evento principal, a realizarse durante el mes de abril.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex gap-8 items-center flex-col md:flex-row"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-250px" }}
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            De la Comunidad para la Comunidad
          </h3>
          <Image src="/separator-half.png" alt="Separator" className="w-52 h-0.5" width={250} height={5} />
          <p className="text-sm sm:text-lg text-white">
            Esta iniciativa nace del deseo de un grupo de jugadores de expandir la comunidad y llevar el juego al siguiente nivel, para que todos los demás miembros de la comunidad de Altered puedan disfrutar del juego y sacarle provecho a sus habilidades. La comunidad la hacemos todos, y para todos nace este proyecto
          </p>
        </div>
        <Image className="px-16 md:px-0 relative -right-24" src="/brushed-trickster.png" alt="Brushed Trickster" width={480} height={480} />
      </motion.div>
    </div>
  )
}