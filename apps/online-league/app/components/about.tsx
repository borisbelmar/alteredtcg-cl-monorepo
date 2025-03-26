/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full px-8 md:px-16 flex-1 my-16 gap-8 max-w-6xl mx-auto"
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={isMobile ? { once: true, margin: "-250px" } : undefined}
    >
      <h3 className="text-xl sm:text-2xl font-bold">
        Sobre la Comunidad
      </h3>
      <img src="/logo-alterados.png" alt="Alterados TCG" width={250} height={250} />
      <p className="text-sm sm:text-lg  text-center mt-2">
        Alterados TCG es una comunidad dedicada a la promoción y difusión de Altered en Chile, creando contenido e instancias competitivas para la comunidad de jugadores de Altered TCG en Chile.
      </p>
      <div className="flex flex-col">
        <a href="https://linktr.ee/alterados.tcg" target="_blank" rel="noopener noreferrer">
          <button className="border-sky-500 hover:border-sky-400 hover:text-sky-400 border inline-flex items-center py-2 px-4 gap-2 rounded-tl-3xl hover:rounded-tl-sm hover:rounded-br-sm rounded-br-3xl rounded-tr-sm rounded-bl-sm font-bold transition-all duration-200 flex-col sm:flex-row text-xs sm:text-base">
            Únete hoy mismo a nuestra comunidad
          </button>
        </a>
      </div>
    </motion.div>
  )
}
