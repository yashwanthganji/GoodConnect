// const { MongoClient } = require('mongodb');

// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    
//     /**
//      * The Mongo Client you will use to interact with your database
//      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
//      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
//      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
//      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
//      */
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls

//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }

// async function createListing(client, newListing){
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
//     console.log(`New listing created with the following id: ${result.insertedId}`);
// }

// await createListing(client,
//     {
//         name: "Lovely Loft",
//         summary: "A charming loft in Paris",
//         bedrooms: 1,
//         bathrooms: 1
//     }
// );

// async function createMultipleListings(client, newListings){
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

//     console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
//     console.log(result.insertedIds);       
// }

// await createMultipleListings(client, [
//     {
//         name: "Infinite Views",
//         summary: "Modern home with infinite views from the infinity pool",
//         property_type: "House",
//         bedrooms: 5,
//         bathrooms: 4.5,
//         beds: 5
//     },
//     {
//         name: "Private room in London",
//         property_type: "Apartment",
//         bedrooms: 1,
//         bathroom: 1
//     },
//     {
//         name: "Beautiful Beach House",
//         summary: "Enjoy relaxed beach living in this house with a private beach",
//         bedrooms: 4,
//         bathrooms: 2.5,
//         beds: 7,
//         last_review: new Date()
//     }
// ]);



// main().catch(console.error);

// // Add functions that make DB calls here


const mongoose = require('mongoose');

// Connect to MongoDB
const uri = "mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB.'))
    .catch(error => console.error('Connection error:', error));

// Define a Schema
// const mySchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
// });

const mySchema = new mongoose.Schema({
    user: user1
});

// Create a Model
const MyModel = mongoose.model('MyCollection', mySchema);

const gfgSchema = new mongoose
    .Schema({
        name: { type: String, required: true },
        class: { type: String, required: true },
    });

const GFGCollection = mongoose
    .model("GFGCollection", gfgSchema);

async function addDataToMongodb() {
    await GFGCollection
        .deleteMany();
    await GFGCollection
        .insertMany(data);
    console.log("Data added to MongoDB");
}




// Read Data
async function readData() {
    try {
        const data = await MyModel.find(); // Fetch all documents
        console.log('Data:', data);
    } catch (error) {
        console.error('Error reading data:', error);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

readData();