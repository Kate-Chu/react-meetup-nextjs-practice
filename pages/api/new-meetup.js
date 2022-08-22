import { MongoClient } from "mongodb";
const MONGODB_URL = process.env.REACT_APP_MONGODB_URL;
console.log(MONGODB_URL);

// /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(MONGODB_URL);
    const db = client.db();

    const meetupsCollection = db.connection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted." });
  }
}
