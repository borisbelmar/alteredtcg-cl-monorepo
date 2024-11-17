export default function Live () {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">
        Streaming Oficial de la Liga
      </h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IibdwLyohzw?si=IUGF293qWxYtmTHu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}