const{ MongoClient } = require('mongodb');

const uri = 'mongodb+srv://mariguapo:marig6996@cluster0.8suig.mongodb.net/';
const client = new MongoClient(uri);

// Connection Uri
async function run() {
    try {
    await client.connect();
    const db = client.db('blog');
    //const collection = db.collection('articulos');
      // Find the first document in the collection
    const articulos = await db.collection('articulos').findOne();
    console.log(articulos.titulo);
    } finally {
      // Close the database connection when finished or an error occurs
    await client.close();
    }
}
run().catch(console.error);