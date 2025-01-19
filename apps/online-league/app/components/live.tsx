'use client'

import { useEffect, useRef } from "react"

const LIVE_EMBED_URL = "https://www.youtube.com/embed/vl_cmkGZgdg?si=foxoz2LShQ5uankl"

export default function Live () {
  const ref = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const onResize = () => {
      if (iframeRef.current) {
        iframeRef.current.width = `${ref.current?.clientWidth?.toString()}px`,
        iframeRef.current.height = `${ref.current?.clientHeight?.toString()}px`
      }
    }
    onResize()
    if (iframeRef.current) {
      window.addEventListener('resize', onResize)
    }
    return () => {
      window.removeEventListener('resize',  onResize)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 w-full">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Streaming Oficial de la Liga
      </h2>
      <div ref={ref} className="relative w-full flex-1 max-w-2xl" style={{ aspectRatio: '16/9' }}>
        <iframe ref={iframeRef} className="abosolute inset-0" src={LIVE_EMBED_URL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" />
      </div>
    </div>
  )
}