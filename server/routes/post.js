const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');


router.post("/", verifyUser, async(req, res) => {
    const { title, data, author } = req.body;
    const user_id = req.id;

    const newPost = new Post({
        title: title,
        data: data,
        author: author,
        user_id: user_id,
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

router.get("/getMyPosts", verifyUser, async(req, res) => {
    console.log(req.id);
    try {
     const posts = await Post.find({user_id: req.id})
     res.status(200).json(posts)
    }catch(error) {
     res.status(403).json({msg: "No posts yet."})
    }
})

router.get("/getUserPosts/:username", async(req, res) => {
    const { username } = req.params;
    try {
     const posts = await Post.find({author: username});
     res.status(200).json(posts)
    }catch(error) {
     res.status(401).json({msg: "Something went wrong."})
    }
})


router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post)
})

router.delete("/:id", verifyUser, async(req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    if(post.user_id === req.id) {
        try {
            await Post.findByIdAndDelete(id);
            res.status(200).json({msg: "Post deleted succesfully."})
        }catch(error){
            res.status(403).json({msg: "Authorization error"})
        }
    }
})

router.post("/createComment", verifyUser, async(req, res) => {
    const user = User.findById(req.id);
    try {
     const newComment = new Comment({
        data: req.body.data,
        author: user.username,
        postId: req.body.postId
     })
     const commentSaved = await newComment.save();
     res.status(200).json({msg: "Comment sucesfully created."})
    }catch(error){
        res.status(401).json({msg: error.message})
        console.log(error.message);
    }
})





module.exports = router;