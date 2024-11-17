import { FACTIONS } from "@repo/schemas/card"

interface FactionButtonsProps {
  factionsSelected: string[]
  // eslint-disable-next-line no-unused-vars
  onFactionSelect: (faction: string) => void // FIXME: This error is wrong
}

export default function FactionButtons ({
  factionsSelected,
  onFactionSelect
}: FactionButtonsProps) {
  return (
    <div className="flex gap-2">
      {Object.values(FACTIONS).map((faction) => (
        <button
          key={faction.slug}
          className="border rounded-lg w-8 h-8 flex items-center justify-center"
          style={{
            borderColor: faction.color,
            color: factionsSelected.includes(faction.slug.toUpperCase()) ? 'white' : faction.color,
            backgroundColor: factionsSelected.includes(faction.slug.toUpperCase()) ? faction.color : 'transparent'
          }}
          onClick={() => onFactionSelect(faction.slug.toUpperCase())}
        >
          <i className={`fa-kit fa-${faction.slug} text-base`} aria-hidden="true"></i>
        </button>
      ))}
    </div>
  )
  
}