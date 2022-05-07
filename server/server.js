const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');


app.get("/", (req, res)=> {
    res.send("hello server")
});


app.listen(port, ()=> {console.log(`server working on ${port}`)})




