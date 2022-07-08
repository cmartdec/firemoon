const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');


router.post("/", verifyUser, async(req, res) => {
    const { title, data, username } = req.body;

    const newPost = new Post({
        title: title,
        data: data,
        username: username
    });

    try {
     if(!title) {
         return res.status(403).json({msg: "Invalid, introduce title"})
     }
     if(!data) {
         return res.status(403).json({msg: "Invalid, introduce data"})
     }
     if(!username) {
         return res.status(403).json({msg: "Invalid, introduce username"})
     }


     const savedPost = await newPost.save();
     console.log(savedPost);
     return res.status(200).json(savedPost);

    }catch(error) {
        console.log(error);
         return res.status(500).json({msg: error})
    }
})


module.exports = router;