const router = require("express").Router();
const List = require("../models/List");
const { findByIdAndDelete } = require("../models/User");
const verify = require("../verifyToken");



router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const newList = new List(req.body);
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json({ error: "An error occurred while saving the list." });
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("The list has been deleted");
        } catch (err) {
            res.status(500).json({ error: "An error occurred while saving the list." });
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

//GET

router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    console.log(typeQuery);
    console.log(genreQuery);
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } }
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } }
                ]);
            }
        } else {
            list = await List.aggregate([
                { $sample: { size: 10 } }
            ]);
        }
        
        // Send the result to the client as JSON
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ error: "An error occurred while fetching the list." });
    }
});




module.exports = router;
