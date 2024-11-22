'use client'

import LogoAlteredCl from "@repo/ui/logo-altered-cl";
import Image from "next/image";
import { useEffect } from "react";

export default function Event() {
  useEffect(() => {
    const isMobile = () => {
      return window.innerWidth < 768;
    }

    const infoContainer = document.getElementById('INFO');

    const changeBackground = () => {
      if (isMobile()) {
        infoContainer!.style.backgroundImage = 'url("/events/festigeek/bg-evento-geekusm-mobile.png")';
      } else {
        infoContainer!.style.backgroundImage = 'url("/events/festigeek/bg-evento-geekusm-desktop.png")';
      }
    }

    changeBackground();

    document.addEventListener('scroll', changeBackground);

    return () => {
      document.removeEventListener('scroll', changeBackground);
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center h-[70vh] relative w-full overflow-hidden">
        <video autoPlay loop muted className="absolute z-[-1] w-full object-cover h-screen top-0 left-0" src="/events/festigeek/bg-festigeek.mp4" />
        <div className="absolute z-[-1] w-full h-screen bg-black opacity-75 top-0 left-0 flex" />
        <div className="flex flex-col items-center justify-center w-full h-screen text-white px-8 text-center flex-1">
          <LogoAlteredCl className="h-20 animate-pulse drop-shadow-lg mb-4" />
          <p className="sm:text-lg mb-2 italic">
            Presenta:
          </p>
          <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold mb-2 uppercase">
            Torneo Festigeek
          </h1>
          <h3 className="text-base sm:text-lg mb-8">
            Primer Torneo de la comunidad para la comunidad
          </h3>
          <p className="sm:text-2xl font-bold uppercase">
            8 de Diciembre de 2024 - 14:00 hrs.
          </p>
          <a
            className="sm:text-lg mb-8 hover:underline"
            href="https://maps.app.goo.gl/rnF7XvnbP3ZZVUmL6"
            target="_blank" rel="noopener noreferrer"
          >
            Universidad Federico Santa María, Campus San Joaquín - Santiago, Chile
          </a>
          <div className="flex flex-col gap-3">
            <a
              href="https://tiendalamadriguera.cl/product/torneo-altered-festigeek-utfsm-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 py-4 gap-2 text-lg sm:text-xl items-center bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all duration-200 uppercase"
            >
              Asegura tu cupo hoy mismo - $10.000 CLP
            </a>
          </div>
        </div>
      </div>
      <div id="INFO" className="flex flex-col flex-1 px-4 py-8 text-center leading-relaxed min-h-screen items-center justify-center bg-neutral-900 bg-cover bg-center">
        <div className="max-w-3xl mx-auto p-8 bg-neutral-950/50 rounded-lg space-y-4">
          <h4 className="font-bold text-xl sm:text-2xl">
            Premios al top y muchas sorpresas más.
          </h4>
          <p className="font-semibold text-lg sm:text-lg">
            4 o 5 rondas suizas (dependiendo de la cantidad de jugadores) y top 4.
          </p>
          <div className="space-y-4 text-sm sm:text-base">
            <p>
              Sean bienvenidos al primer torneo organizado por Altered TCG chile! En esta fecha podrán demostrar el poder de sus barajas y la fortaleza de su estrategia enfrentando a sus rivales en cada expedición. Este torneo tiene como objetivo incentivar los eventos especiales fuera de las ligas semanales, dónde el ganador se lleva toda la gloria.
            </p>
            <p>
              La entrada a la feria <strong>FESTIGEEK</strong> es gratuita y el torneo es un evento dentro de esta, por lo que están todos invitados a disfrutar de la feria y sus diferentes actividades.
            </p>
          </div>
          <div className="flex justify-center items-center pt-6 gap-8 flex-col sm:flex-row">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-sm italic">Invita:</p>
              <Image src="/events/festigeek/geekusm-logo.png" width={200} height={200} alt="GeekUSM" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-sm italic">Organiza:</p>
              <Image src="/events/festigeek/alteredtcgcl-logo.png" width={200} height={200} alt="Altered TCG Chile" />
            </div>
          </div>
        </div>
        <Image
          src="/altered-logo.png"
          alt="Altered"
          className="mt-12"
          width={200}
          height={200}
        />
      </div>
      <div>
        <footer className="w-full text-center text-white py-4 text-xs sm:text-sm bg-neutral-950">
          <p>
            © 2024 - Desarrollado con ❤️ por <strong>Boris Belmar</strong> de <strong>Alterados TCG</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}
