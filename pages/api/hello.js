// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from 'next-connect';

import middleware from '../../middleware/mongodb.js';
import Credit from '../../models/credit.js';



const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const {date} = req.query;
  let doc = {}
  if (date) {
    doc = await req.db.collection('credits').find({date: date}).toArray();
  } else {
    doc = await req.db.collection('credits').find({}).toArray();
  }
  res.json(doc)
}
  )

handler.post(async (req, res) => {
  let data = req.body
  data = JSON.parse(data)
  const doc = await req.db.collection('credits').insertOne(data)
  res.json(doc)
}
  )

handler.put(async (req, res) => {
  let data = req.body
  await req.db.collection('credits').updateOne({date: data.date}, {$push: {credits: data.credits}})
  res.json(data)
  
}
  )


export default handler