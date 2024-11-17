import mongoose, { Mongoose } from 'mongoose'

const MONGO_URI = process.env.MONGO_URI as string

if (!MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

let cache: { conn: Mongoose | null } = { conn: null };

export default async function connectToMongo() {
  if (process.env.NODE_ENV === "development") {
    let globalWithMongo = global as typeof globalThis & {
      _mongoConn?: Mongoose;
    }

    if (!cache.conn || !globalWithMongo._mongoConn) {
      globalWithMongo._mongoConn = await mongoose.connect(MONGO_URI);
    }
    cache.conn = globalWithMongo._mongoConn;
  } else {
    if (!cache.conn) {
      cache.conn = await mongoose.connect(MONGO_URI);
    }
  }
}