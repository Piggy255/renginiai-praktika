import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DATABASE_URI || '';
const client = new MongoClient(uri, {
    ServerApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    //connect client to the server
    await client.connect();
    //send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You succesfully connected to mongoDB!"
    );
} catch(err){
    console.error(err)
}

let db = client.db("Events");

export default db;