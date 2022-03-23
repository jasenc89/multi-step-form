import connect from "../../../utils/database";

const handler = async (req, res) => {
  res.status(200).json({ message: "success" });

  const { db } = await connect();
  const clientData = req.body;
  const result = await db.collection("clients").insertOne({
    client: clientData,
  });
};

export default handler;
