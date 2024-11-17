'use client'

import { CardResponse } from "../app/page"
import { Search, SortAsc, SortDesc } from "lucide-react"
import { useMemo, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select"
import FactionButtons from "./factionButtons"
import CardItem from "./cardItem"

interface CardListProps {
  cards: CardResponse[]
}

export default function CardList({ cards }: CardListProps) {
  const [factionsSelected, setFactionsSelected] = useState<string[]>([]) 
  const [sortBy, setSortBy] = useState<string>('default')
  const [search, setSearch] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<string>('asc')

  const handleFactionSelect = (faction: string) => {
    if (factionsSelected.includes(faction)) {
      setFactionsSelected(factionsSelected.filter((slug) => slug !== faction))
    } else {
      setFactionsSelected([...factionsSelected, faction])
    }
  }

  const filteredCards = useMemo(() => cards.filter((card) => {
    let matchesSearch = true
    if (factionsSelected.length !== 0) {
      matchesSearch = factionsSelected.includes(card.faction)
    }
    if (search.length !== 0) {
      matchesSearch = card.name.toLowerCase().includes(search.toLowerCase())
    }
    return matchesSearch
  }), [cards, factionsSelected, search])

  const sortedCards = useMemo(() => {
    return [...filteredCards].sort((a, b) => {
      if (sortBy === 'default') {
        return 0
      }
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? (a.prices?.[0]?.price ?? 0) - (b.prices?.[0]?.price ?? 0) : (b.prices?.[0]?.price ?? 0) - (a.prices?.[0]?.price ?? 0)
      }
      if (sortBy === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      }
      return 0
    })
  }, [filteredCards, sortBy, sortOrder])

  const handleSortBy = (sortBy: string) => {
    if (sortBy === 'default') {
      setSortOrder('asc')
    }
    setSortBy(sortBy)
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-8 sticky top-0 z-10 backdrop-blur-sm border-b mb-8 bg-zinc-900/80 flex flex-col gap-2">
        <div className="border rounded-lg flex-1 text-white flex items-center gap-2 border-sky-800 focus-within:outline focus-within:outline-offset-2 focus-within:outline-sky-500">
          <Search className="w-6 h-6 ml-4" />
          <input
            type="text"
            placeholder="Buscar carta..."
            className="bg-transparent text-white w-full h-full p-4 pl-0 text-base focus-visible:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
          <FactionButtons factionsSelected={factionsSelected} onFactionSelect={handleFactionSelect} />
          <div className="flex gap-1 items-center">
            <button
              className="border border-input bg-background rounded-lg w-10 h-10 flex items-center justify-center text-white px-2 disabled:opacity-10"
              disabled={sortBy === 'default'}
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            >
              {sortOrder === 'desc' ? (
                <SortAsc className="w-6 h-6" />
              ) : (
                <SortDesc className="w-6 h-6" />
              )}
            </button>
            <Select
              value={sortBy}
              onValueChange={handleSortBy}
            >
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Por defecto</SelectItem>
                <SelectItem value="name">Nombre</SelectItem>
                <SelectItem value="price">Precio</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 sm:px-8">
        {sortedCards.map((card: CardResponse) => (
          <CardItem key={card.game_id} card={card} />
        ))}
      </div>
    </>
  )
}