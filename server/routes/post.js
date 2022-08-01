const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');


router.post("/", verifyUser, async(req, res) => {
    const { title, data, author } = req.body;

    const newPost = new Post({
        title: title,
        data: data,
        author: author,
    });

    try {
     if(!title) {
         return res.status(403).json({msg: "Invalid, introduce title."})
     }
     if(!data) {
         return res.status(403).json({msg: "Invalid, introduce body."})
     }
     if(!author) {
         return res.status(401).json({msg: "Please log in."})
     }

     const savedPost = await newPost.save();
     console.log(savedPost);
     return res.status(200).json(savedPost);

    }catch(error) {
        console.log(error);
         return res.status(500).json({msg: error})
    }
})

router.get("/getAllPosts", async(req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts)
})

router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post)
})


module.exports = router;