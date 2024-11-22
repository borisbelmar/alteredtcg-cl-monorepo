'use client'

import { useEffect, useRef } from "react";

export default function BackgroundLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = () => {
      return window.innerWidth < 768;
    }

    const changeBackground = () => {
      if (isMobile()) {
        ref.current!.style.backgroundImage = 'url("/events/festigeek/bg-evento-geekusm-mobile.png")';
      } else {
        ref.current!.style.backgroundImage = 'url("/events/festigeek/bg-evento-geekusm-desktop.png")';
      }
    }

    changeBackground();

    document.addEventListener('scroll', changeBackground);

    return () => {
      document.removeEventListener('scroll', changeBackground);
    }
  }, []);
  return (
    <div ref={ref} className="flex flex-col flex-1 px-4 py-8 text-center leading-relaxed min-h-screen items-center justify-center bg-neutral-900 bg-cover bg-center">
      {children}
    </div>
  );
}
