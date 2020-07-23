import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect();
    const sightings = await db.collection("sightings").find().toArray();
    res.status(200);
    res.json({ sightings });
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to fetch sightings... sorry" });
  }
}
