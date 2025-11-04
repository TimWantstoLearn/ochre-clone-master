import { MongoClient } from 'mongodb';
import 'dotenv/config';

async function testConnection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI environment variable not set');
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Successfully connected to MongoDB!');
    const db = client.db(); // default db from URI
    const collections = await db.collections();
    console.log('Collections:', collections.map(c => c.collectionName));
  } catch (e) {
    console.error('Connection error:', e);
  } finally {
    await client.close();
  }
}

testConnection();
