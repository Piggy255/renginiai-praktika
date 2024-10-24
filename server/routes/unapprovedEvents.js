import express from 'express'
import db from '../db/connection.js'
import { ObjectId } from 'mongodb'

const router = express.Router();

// This section will help you get a list of all the Events.
router.get("/", async (req, res) => {
    let collection = await db.collection("unapprovedEvents");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// This section will help you get a single Event by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("unapprovedEvents");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section will help you create a new Event.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            category: req.body.category,
            time: req.body.time,
            date: req.body.date,
            location: req.body.location,
            image: req.body.image,
            user: req.body.user,
        };
        let collection = await db.collection("unapprovedEvents");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding Event");
    }
});

// This section will help you update an Event by id.
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name,
                category: req.body.category,
                time: req.body.time,
                date: req.body.date,
                location: req.body.location,
                image: req.body.image,
                user: req.body.user,
            },
        };

        let collection = await db.collection("unapprovedEvents");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating Event");
    }
});

// This section will help you delete an Event
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("unapprovedEvents");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting Event");
    }
});

export default router;