import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect();
    const {
      sighting: { latitude, longitude },
    } = req.body;

    const result = await db.collection("sightings").insertOne({
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
      createdAt: new Date(),
    });

    res.status(201);
    res.json({ sighting: result.ops[0] });
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to insert sighting... sorry" });
  }
}
