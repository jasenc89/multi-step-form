import connect from "../../../utils/database";

const handler = async (req, res) => {
  const { db } = await connect();
  const clientData = req.body;
  const result = await db.collection("clients").insertOne({
    client: clientData,
  });

  res.status(201).json({ message: "success" });
};

export default handler;
