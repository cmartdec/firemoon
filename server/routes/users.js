const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require('jsonwebtoken');


router.post("/register", async(req, res) => {
    try {
        let { username, email, password } = req.body;

        const existingEmail= await User.findOne({
            email: email
        })

        const existingUser= await User.findOne({
            username: username,
        })

        if (existingEmail) {
            return res.status(400).json({msg: "Email address already exists."});
        }
        if (existingUser) {
            return res.status(400).json({msg: "Username already exists."});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch(error) {
        res.status(400).json(error);
        console.log(error);
    }
});

router.post("/login", async(req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({ email: email });
        if(!user) {
            return res.status(400).json({msg: "Email address doesn't exists."})
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({msg: "Invalid credentials."});
        }

        const token = jwt.sign({id: user._id }, process.env.JWT);
        console.log("token >> ", token);
        res.json({
            token,
            user:{
                id: user._id,
                username: user.username,
            }
        });
    }catch(error) {
        res.status(500).json({error: err.message});
    }
})

module.exports = router;

