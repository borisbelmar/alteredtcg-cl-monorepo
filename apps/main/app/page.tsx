import LogoAlteredCl from "@repo/ui/logo-altered-cl";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen absolute w-full">
      <video autoPlay loop muted className="absolute z-[-1] w-full object-cover h-screen top-0 left-0" src="/bg-video.mp4" />
      <div className="absolute z-[-1] w-full h-screen bg-black opacity-75 top-0 left-0 flex" />
      <div className="flex flex-col items-center justify-center w-full h-screen text-white px-8 text-center flex-1">
        <p className="sm:text-lg mb-4">
          Pronto...
        </p>
        <LogoAlteredCl className="md:h-48 h-32 animate-pulse drop-shadow-lg mb-8" />
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          Comunidad de Altered TCG en Chile
        </h1>
        <p className="sm:text-lg">
          Comunidad, torneos, eventos y más.
        </p>
        <div className="flex flex-col gap-3 mt-16">
          <a href="https://linktr.ee/alterados.tcg" target="_blank" rel="noopener noreferrer">
            <button className="border-[#3F50AD] hover:border-[#89aaff] hover:text-[#89aaff] border inline-flex items-center py-2 px-4 gap-2 rounded-tl-3xl hover:rounded-tl-sm hover:rounded-br-sm rounded-br-3xl rounded-tr-sm rounded-bl-sm font-bold transition-all duration-200 flex-col sm:flex-row text-xs sm:text-base">
              <Avatar>
                <AvatarImage src="/alterados-tcg.png" alt="Alterados TCG" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              Únete a la comunidad Alterados TCG
            </button>
          </a>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center text-white py-4 text-xs sm:text-sm">
        <p>
          © 2024 - Desarrollado con ❤️ por <strong>Boris Belmar</strong> de <strong>Alterados TCG</strong>
        </p>
      </footer>
    </div>
  );
}
