
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Racoonat:3469@cluster0.2owqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect(async err=>{
    const collection=client.db("sample_mflix").collection("movies");
    const pipeline =[
        {
          '$match': {
            'metacritic': {
              '$gt': 55
            }, 
            'year': {
              '$lt': 2020
            }, 
            'languages': 'Spanish'
          }
        }, {
          '$sort': {
            'metacritic': 1
          }
        }, {
          '$project': {
            'title': 1, 
            'plot': 1, 
            'genres': 1, 
            'metacritic': 1
          }
        }, {
          '$limit': 20
        }
    ];
    const agg=await collection.aggregate(pipeline).toArray();
    console.log(agg);
    client.close();
});

