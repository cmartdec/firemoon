const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const port = 5000;
const User = require("./models/User");
const bcrypt = require('bcrypt');


const app = express();
dotenv.config();


const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB.");
    } catch(err){
        console.log(err);
    }
}

mongoose.connection.on("disconnected", ()=> {
    console.log("MongoDB disconnected");
})

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("hello server")
})

app.post("/register", async(req, res) => {
    try {
        let { username, email, password } = req.body;

        const existingEmail= await User.findOne({
            email: email
        })

        const existingUser= await User.findOne({
            username: username,
        })

        if (existingEmail) {
            return res.status(400).json({msg: "An account with this email already exists."});
        }
        if (existingUser) {
            return res.status(400).json({msg: "This username already exists."});
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


app.listen(port, ()=> {
    connect();
    console.log(`Server working. Listening on port ${port}`);
});




