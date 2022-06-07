const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const port = 5000;
const helmet = require('helmet');
const cookieParser = require('cookie-parser');


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
app.use(cors({ origin: "http://localhost:3000", credentials: true}));
app.options('*', cors());
app.use(helmet());
app.use(cookieParser());




app.use("/users", require("./routes/users.js"));



app.listen(port, ()=> {
    connect();
    console.log(`Server working. Listening on port ${port}`);
});




