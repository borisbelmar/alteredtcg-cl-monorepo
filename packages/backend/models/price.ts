import mongoose, { Schema, Document, Model } from 'mongoose';
import { Price } from '@repo/schemas/price'

type PriceDocument = Price & Document

const PriceSchema: Schema = new Schema({
  game_id: { type: String, required: true },
  price: { type: Number, required: true },
  reason: { type: String, required: false, default: '' }
}, {
  timestamps: true
})

const PriceModel: Model<PriceDocument> = mongoose.models.Price || mongoose.model<PriceDocument>('Price', PriceSchema);

export default PriceModel
