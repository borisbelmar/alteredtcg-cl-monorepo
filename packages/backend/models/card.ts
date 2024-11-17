import mongoose, { Schema, Document, Model } from 'mongoose';
import { Card } from '@repo/schemas/card'

type CardDocument = Card & Document

const CardSchema: Schema = new Schema({
  game_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rarity: { type: String, required: true },
  imagePath: { type: String, required: true },
  faction: { type: String, required: true },
  type: { type: String, required: true }
}, {
  timestamps: true
})

const CardModel: Model<CardDocument> = mongoose.models.Card || mongoose.model<CardDocument>('Card', CardSchema);

export default CardModel
