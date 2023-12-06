const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//Update

router.put("/:id", verify, async (req, res)=>{
    //this res.user is coming from verify part
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true});
            res.status(200).json(updateUser);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you can update only your account!")
    }
})

//Delete
router.delete("/:id", verify, async (req, res)=>{
    //this res.user is coming from verify part
    if(req.user.id === req.params.id || req.user.isAdmin){
        

        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted..");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you can delete only your account!")
    }
})

//GET
router.get("/find/:id", verify, async (req, res)=>{
    //this res.user is coming from verify part
        try{
           const user = await User.findById(req.params.id);
           const {password, ...info}=user;
            res.status(200).json(info);
        }catch(err){
            res.status(500).json(err);
        }
    
})

//GET ALL
router.get("/", verify, async (req, res)=>{
   
    const query = req.query.new;
    if( req.user.isAdmin){
    
        try{
            const users = query ? await User.find().sort({_id:-1}).limit(2) : await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you are not allowed to see all users")
    }
})

//GET USER STATS
router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
