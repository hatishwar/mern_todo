const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
// const mongoURL = 'mongodb://localhost:27017';
const mongoURL = 'mongodb+srv://testdbuser:TyE0UZlK1VOpOR6C@cluster0.6gqbp.mongodb.net/';
const client = new MongoClient(mongoURL);
const dbName = 'mytodo';
const collectionName = 'tododata';

app.use(cors());
app.use(bodyParser.json());

(async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
})();

const db = client.db(dbName);
const todoCollection = db.collection(collectionName);

// Add a new ToDo item
app.post('/api/todos', async (req, res) => {
    const { text } = req.body;
    const newTodo = {
        text,
        date: new Date(),
        status: false
    };

    try {
        const result = await todoCollection.insertOne(newTodo);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add todo', error });
    }
});

// Get all ToDo items
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await todoCollection.find({}).toArray();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve todos', error });
    }
});

// Update a ToDo item's status
app.patch('/api/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        await todoCollection.updateOne({ _id: new ObjectId(id) }, { $set: { status } });
        res.json({ message: 'Todo status updated' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update todo', error });
    }
});

// Delete a ToDo item
app.delete('/api/todos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await todoCollection.deleteOne({ _id: new ObjectId(id) });
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete todo', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
