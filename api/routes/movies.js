const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");


router.post("/", verify, async (req, res) => {
    
    if (req.user.isAdmin) {
        try {
            
            const newMovie = new Movie(req.body);
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
            console.log("movie creation successful")
        } catch (err) {
            res.status(500).json({ error: "An error occurred while saving the movie." });
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});



router.put("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin){
   
       try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {set:req.body,}, {new: true});
        res.status(201).json(movie);
       }catch(err){
        res.status(500).json;
       }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

router.put("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin){
   
       try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {set:req.body,}, {new: true});
        res.status(201).json(movie);
       }catch(err){
        res.status(500).json;
       }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

router.delete("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin){
   
       try{
        await Movie.findByIdAndDelete(req.params.id);
        res.status(201).json("The movie has benn deleted");
       }catch(err){
        res.status(500).json;
       }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

router.get("/find/:id", verify, async (req, res)=>{
    
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(201).json(movie);
       }catch(err){
        res.status(500).json;
       }
    }
)
//GET RANDOM

router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", verify, async (req, res)=>{
    if(req.user.isAdmin){
   
       try{
        const movies = await Movie.find();
        res.status(201).json(movies.reverse());
       }catch(err){
        res.status(500).json;
       }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

module.exports = router;
