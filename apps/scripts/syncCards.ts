import axios from 'axios'
import qs from 'querystring'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const ALTERED_CARDS_LIST = 'https://api.altered.gg/cards'

const queries = {
  page: 1,
  itemsPerPage: 36,
  locale: 'es-es',
  cardSet: 'CORE'
}

const downloadDb = async () => {
  const query = qs.stringify(queries)
  const { data } = await axios.get(`${ALTERED_CARDS_LIST}?${query}`)
  
  const totalItems = data['hydra:totalItems']

  for (let i = 2; i <= Math.ceil(totalItems / queries.itemsPerPage); i++) {
    queries.page = i
    const query = qs.stringify(queries)
    const { data: newData } = await axios.get(`${ALTERED_CARDS_LIST}?${query}`)
    data['hydra:member'] = data['hydra:member'].concat(newData['hydra:member'])
    console.log('Page', i, 'downloaded', data['hydra:member'].length, 'altered cards')
  }
  console.log('Altered cards downloaded')
  console.log('Total altered cards downloaded:', data['hydra:member'].length)

  const alteredCards: {
    game_id: string,
    name: string,
    rarity: string,
    imagePath: string,
    faction: string,
    type: string
  }[] = []

  type Card = {
    reference: string,
    name: string,
    rarity: {
      reference: string
    },
    imagePath: string,
    mainFaction: {
      reference: string
    },
    cardType: {
      reference: string
    }
  }

  data['hydra:member'].forEach((card: Card) => {
    alteredCards.push({
      game_id: card.reference,
      name: card.name,
      rarity: card.rarity.reference,
      imagePath: card.imagePath,
      faction: card.mainFaction.reference,
      type: card.cardType.reference
    })
  })
  
  mongoose.connect(process.env.MONGO_URI!).then(async () => {
    console.log('Connected to db')
    const CardModel = await import('@repo/backend/models/card')
    const promises = alteredCards.map(async card => {
      const newCard = CardModel.default.findOneAndUpdate({ game_id: card.game_id }, card, {
        upsert: true
      })
      return newCard
    })
    await Promise.all(promises)
    console.log('Altered cards saved to db')
  })
}

downloadDb()
