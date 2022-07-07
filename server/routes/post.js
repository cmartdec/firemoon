const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');


router.post("/", verifyUser, async(req, res) => {
    const newPost = new Post(req.body);

    try {
     if(!req.body) {
         res.status(403).json({msg: "Invalid"})
     }
     const savedPost = await newPost.save();
     console.log(savedPost);
     res.status(200).json(savedPost);
    }catch(error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post) {
            res.status(200).json({title: post.title, data: post.data})
        }
    }catch(error) {
        console.log(error);
    }
})


module.exports = router;