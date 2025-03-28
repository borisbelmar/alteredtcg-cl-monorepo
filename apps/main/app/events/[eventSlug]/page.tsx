import LogoAlteredCl from "@repo/ui/logo-altered-cl";
import { Metadata } from "next";
import Image from "next/image";
import BackgroundLayout from "./backgroundLayout";

export const metadata: Metadata = {
  title: "Torneo Festigeek | Altered TCG Chile",
  description: "Primer torneo de la comunidad para la comunidad. 8 de Diciembre de 2024 en la Universidad Federico Santa María, Campus San Joaquín - Santiago, Chile.",
}

export default function Event() {
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
            8 de Diciembre de 2024 - 13:00 hrs.
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
              className="inline-flex px-8 py-4 gap-2 text-base sm:text-lg items-center bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all duration-200 uppercase"
            >
              Asegura tu cupo hoy mismo - $10.000 CLP
            </a>
          </div>
        </div>
      </div>
      <BackgroundLayout>
        <div className="max-w-3xl mx-auto p-8 bg-neutral-950/50 rounded-lg space-y-4">
          <h4 className="font-bold text-xl sm:text-2xl">
            Premios al top y muchas sorpresas más.
          </h4>
          <p className="font-semibold text-lg sm:text-lg">
            4 o 5 rondas suizas (dependiendo de la cantidad de jugadores) y ronda de desempate.
          </p>
          <div className="space-y-4 text-sm sm:text-base">
            <p>
              Sean bienvenidos al primer torneo organizado por Altered TCG chile! En esta fecha podrán demostrar el poder de sus barajas y la fortaleza de su estrategia enfrentando a sus rivales en cada expedición. Este torneo tiene como objetivo incentivar los eventos especiales fuera de las ligas semanales, dónde el ganador se lleva toda la gloria.
            </p>
            <h3 className="font-bold text-lg sm:text-xl">
              Itinerario del torneo:
            </h3>
            <ul>
              <li>
                <strong>13:00 hrs.</strong> - Inscripción y confirmación de jugadores.
              </li>
              <li>
                <strong>14:00 hrs.</strong> - Inicio del torneo.
              </li>
              <li>
                <strong>17:00 hrs.</strong> - Ronda de desempate.
              </li>
              <li>
                <strong>17:30 hrs.</strong> - Premiación y cierre del torneo.
              </li>
            </ul>
            <p>
              La entrada a la feria <strong>FESTIGEEK</strong> es gratuita y el torneo es un evento dentro de esta, por lo que están todos invitados a disfrutar de la feria y sus diferentes actividades.
            </p>
            <a
              className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors whitespace-nowrap text-center block mt-4"
              href="https://www.altered.gg/events/01JDFGFR4P5GSM6Z0VN0CVHVBK"
              target="_blank"
              rel="noreferrer"
            >
              Pre-regístrate en el Evento
            </a>
            <a
              className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors whitespace-nowrap text-center block"
              href="https://tiendalamadriguera.cl/product/torneo-altered-festigeek-utfsm-2024/"
              target="_blank"
              rel="noreferrer"
            >
              Asegura tu entrada aquí
            </a>
          </div>
          <div className="flex justify-center items-center pt-6 gap-8 flex-col sm:flex-row">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-sm italic">Invita:</p>
              <Image src="/events/festigeek/geekusm-logo.png" width={150} height={150} alt="GeekUSM" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-sm italic">Organiza:</p>
              <Image src="/events/festigeek/alteredtcgcl-logo.png" width={150} height={150} alt="Altered TCG Chile" />
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
      </BackgroundLayout>
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
