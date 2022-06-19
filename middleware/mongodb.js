import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';


const client = new MongoClient(`mongodb+srv://fullstack:cimbom2626@cluster0.hbvhs.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
    await client.connect();
  req.dbClient = client;
  req.db = client.db('rl-revenue');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;