import { getDb } from "../../lib/mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, paymentId } = req.body;
    const db = await getDb();
    await db.collection("rsvps").insertOne({ name, phone, paymentId, createdAt: new Date() });
    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const db = await getDb();
    const list = await db.collection("rsvps").find().toArray();
    res.status(200).json(list);
  } else {
    res.status(405).end();
  }
}