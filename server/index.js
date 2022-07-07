const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 5000;
const User = require("./models/User");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("connected to database");
    } catch(error) {
        console.log(error);
    }
}

mongoose.connection.on("disconnected", ()=> {
    console.log("Database disconnected");
});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}));
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);
app.use(cookieParser());




app.get("/", (req, res) => {
    res.send("hello express server");
})


app.listen(port, () => {
    connect();
    console.log(`listening on ${port}`);

});










