// const {MongoClient} = require('mongodb');

// async function main(){

//     const uri = "mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         await listDatabases(client);
//     } catch (e){
//         console.error(e);
//     } finally {
//         await client.close();
//     }

// }

// main().catch(console.error);

// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let usersCollection;

async function main() {
    try {
        await client.connect();
        const database = client.db("goodconnect");
        usersCollection = database.collection("users");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}
main();

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const result = await usersCollection.insertOne({ username, email, password });
        res.status(201).send({ message: "User registered", id: result.insertedId });
    } catch (err) {
        res.status(500).send({ error: "Error registering user" });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await usersCollection.find({}, { projection: { username: 1 } }).toArray();
        res.send(users);
    } catch (err) {
        res.status(500).send({ error: "Error fetching users" });
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
