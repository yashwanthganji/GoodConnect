// const {MongoClient} = require('mongodb');
// const client = new MongoClient("mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
	                      
// 	async function run() {
// 	    try {
// 	        // Connect to the Atlas cluster
// 	         await client.connect();
	
// 	         // Get the database and collection on which to run the operation
// 	         const db = client.db("Logins");
// 	         const Usercol = db.collection("Uses");
	
// 	         // Create new documents                                                                                                                                         
// 	         const newUsers = [
// 	           {
// 	             "user": { "user": username}
// 	           }
// 	         ]

//             //  const newUsers = [
//             //     {
//             //       "user": { "password": password},
//             //       "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
//             //       "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
//             //       "contribs": [ "Turing machine", "Turing test", "Turingery" ],
//             //       "views": 1250000
//             //     }
//             //   ]
	
// 	         // Insert the documents into the specified collection        
// 	         const p = await Usercol.insertMany(newUsers);
	
// 	         // Find the document
// 	         const filter = { "user.user": "user1" };
// 	         const document = await Usercol.findOne(filter);
	
// 	         // Print results
// 	         console.log("Document found:\n" + JSON.stringify(document));
	
// 	        } catch (err) {
// 	         console.log(err.stack);
// 	     }
	 
// 	     finally {
// 	        await client.close();
// 	    }
// 	}
	
// run().catch(console.dir);







// const { MongoClient } = require('mongodb');
// const client = new MongoClient("mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// async function run() {
//     try {
//         // Connect to the Atlas cluster
//         await client.connect();

//         // Get the database and collection on which to run the operation
//         const db = client.db("Logins");
//         const Usercol = db.collection("Users");

//         // Create new documents
//         const newUsers = [
//             {
//                 "user": { "user": "username" }
//             }
//         ];

//         // Insert the documents into the specified collection
//         const p = await Usercol.insertMany(newUsers);

//         // Find the document
//         const filter = { "user.user": username };
//         const document = await Usercol.findOne(filter);

//         // Print results
//         console.log("Document found:\n" + JSON.stringify(document));

//     } catch (err) {
//         console.log(err.stack);
//     }
// }

// function start() {
//     const intervalId = setInterval(run, 10000); // run every 1000 milliseconds (1 second)

//     // Optionally, you can use clearInterval(intervalId) to stop it manually later
//     // For example, call clearInterval(intervalId) after a certain condition or based on user input
// }

// // Call start to begin the process
// start();









// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();
// const port = 3000;

// // MongoDB client setup
// const client = new MongoClient("mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// app.use(express.static('public')); // Serve static files from the 'public' folder

// async function run() {
//     try {
//         await client.connect();
//         const db = client.db("Logins");
//         const Usercol = db.collection("Users");

//         const newUsers = [
//             {
//                 "user": { "user": username }
//             }
//         ];

//         await Usercol.insertMany(newUsers);

//         const filter = { "user.user": username };
//         const document = await Usercol.findOne(filter);

//         console.log("Document found:\n" + JSON.stringify(document));
//     } catch (err) {
//         console.log(err.stack);
//     }
// }

// app.get('/run', (req, res) => {
//     run().then(() => {
//         res.send("Operation completed");
//     }).catch(err => {
//         res.status(500).send("Error occurred: " + err.message);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });






const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB client setup
const client = new MongoClient("mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(express.json()); // Parse JSON bodies

// MongoDB connection and User insert function
async function insertUser(username) {
    try {
        await client.connect();
        const db = client.db(Logins);
        const Usercol = db.collection(Users);

        // Check if the user already exists
        const existingUser = await Usercol.findOne({ "user": username });
        if (existingUser) {
            throw new Error('Username already exists!');
        }

        // Insert the new user
        const newUser = {
            "user": username
        };

        await Usercol.insertOne(newUser);
        console.log("User inserted:", newUser);
    } catch (err) {
        throw new Error('Error inserting user: ' + err.message);
    }
}

// Endpoint to handle signup
app.post('/signup', async (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: "Username is required" });
    }

    try {
        await insertUser(username);
        res.status(200).json({ message: 'User successfully signed up!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});






// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();
// const port = 3000;

// // MongoDB client setup
// const client = new MongoClient("mongodb+srv://yashwanthganji04:Yashu1324@cluster0.ty6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// app.use(express.static('public')); // Serve static files from the 'public' folder
// app.use(express.json()); // Parse JSON bodies

// // MongoDB connection and User insert function
// async function insertUser(username) {
//     try {
//         console.log("Connecting to MongoDB...");
//         await client.connect();  // Ensure client connects before proceeding
//         const db = client.db("Logins");
//         const Usercol = db.collection("Users");

//         // Check if the user already exists
//         const existingUser = await Usercol.findOne({ "user": username });
//         if (existingUser) {
//             console.log("Username already exists:", username);
//             throw new Error('Username already exists!');
//         }

//         // Insert the new user
//         const newUser = { "user": username };
//         await Usercol.insertOne(newUser);
//         console.log("User inserted:", newUser);
//     } catch (err) {
//         console.log("Error during MongoDB operation:", err.message);
//         throw new Error('Error inserting user: ' + err.message);
//     }
// }

// // Endpoint to handle signup
// app.post('/signup', async (req, res) => {
//     const { username } = req.body;
//     if (!username) {
//         console.log("Username is missing in the request body");
//         return res.status(400).json({ message: "Username is required" });
//     }

//     try {
//         console.log("Received signup request with username:", username);
//         await insertUser(username);
//         res.status(200).json({ message: 'User successfully signed up!' });
//     } catch (err) {
//         console.log("Error processing signup:", err.message);
//         res.status(500).json({ message: err.message });
//     }

    
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

// insertUser();
