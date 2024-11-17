import mongoose, { Schema, Document, Model } from 'mongoose';
import { User } from '@repo/schemas/user'

type UserDocument = User & Document

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  scopes: { type: Map, required: true }
}, {
  timestamps: true
})

const UserModel: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);

export default UserModel
