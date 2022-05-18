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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json(error);
        console.log(error);
    }
});


app.listen(port, ()=> {
    connect();
    console.log(`Server working. Listening on port ${port}`);
});




