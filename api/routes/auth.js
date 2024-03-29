const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


//REGISTER
router.post("/register",async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    console.log(newUser)
    try{
        console.log("yayyy")
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    try {
        // Find the user by email
        console.log(req.user);
        const user = await User.findOne({ email: req.body.email });

        // If no user is found, respond with an error
        if (!user) {
            return res.status(401).json('Wrong password or email');
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json('Wrong password or username');
        }

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
             process.env.SECRET_KEY, 
             {expiresIn: "30d"} );

        const { password, ...info } = user._doc;

        res.status(200).json({...info, accessToken});
    } catch (err) {
        // Handle any server errors
        console.error(err);
        res.status(500).json('Internal server error');
    }
});



module.exports = router;