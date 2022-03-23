import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db("clients");
  return { db, client };
};

export default connect;
