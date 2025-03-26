/* eslint-disable @next/next/no-img-element */
import About from "./components/about"
import Hero from "./components/hero"
import NextDates from "./components/nextDates"
import Live from "./components/live"

export default function Page () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 overflow-hidden w-screen">
      <Hero />
      <NextDates />
      <img src="/separator.png" alt="Separator" className="w-full h-0.5 px-16" width={900} height={5} />
      <Live />
      <img src="/separator.png" alt="Separator" className="w-full h-0.5 px-16" width={900} height={5} />
      <About />
      <footer className="w-full text-center py-4 text-xs self-end px-2">
        <p>
          © 2024 - Desarrollado con ❤️ por <strong>Boris Belmar</strong> de <strong>Alterados TCG</strong> - <strong>Altered</strong> es una marca registrada de <strong>Equinox</strong>.
        </p>
      </footer>
    </div>
  )
}