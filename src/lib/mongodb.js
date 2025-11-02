import { MongoClient } from "mongodb"

let cachedClient = null

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }

  const client = new MongoClient(process.env.MONGODB_URI)

  try {
    await client.connect()
    cachedClient = client
    return client
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw error
  }
}

export async function getDatabase() {
  const client = await connectToDatabase()
  return client.db("torino-motors")
}
