'use client'

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full px-8 md:px-16 flex-1 my-16 gap-8 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-250px" }}
    >
      <h3 className="text-xl sm:text-2xl font-bold">
        Sobre nosotros
      </h3>
      <Image src="/altered-cl-white.png" alt="Altered TCG Chile" width={250} height={250} />
      <p className="text-sm sm:text-lg  text-center mt-2">
        Altered TCG Chile es una comunidad de jugadores de que busca fomentar la competencia y el juego en la región. Organizamos torneos, eventos y actividades para la comunidad de jugadores de Altered TCG en Chile.
      </p>
    </motion.div>
  )
}
