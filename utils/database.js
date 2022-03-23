import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async () => {
  await client.connect();
  const db = client.db("clients");
  return { db, client };
};

export default connect;
