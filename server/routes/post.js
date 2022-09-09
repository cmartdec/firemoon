const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');
const PostLike = require("../models/PostLike");
const PostSaved = require("../models/PostSaved");


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
    const username = req.params;
    try {
        const user = await User.findOne(username);
        const posts = await Post.find({user_id: user._id});
        res.status(200).json(posts)
    }catch(error) {
        res.status(401).json({msg: error.message})
    }
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
    }else {
        res.status(403).json({msg: "Authorization error."})
    }
})

router.post("/like/:id", verifyUser, async(req, res) => {
    try {
    const { id } = req.params;
    const user_id = req.id;

    const post = await Post.findById(id);
    
    if(!post) {
        throw new Error("Post does not exist.")
    }

    const existingPostLike = await PostLike.findOne({ postId: id, userId: user_id });
    console.log(existingPostLike);

    if(existingPostLike) {
        throw new Error("Post already liked.");
    }

    await PostLike.create({
        postId: id,
        userId: user_id,
    });

    post.likeCount = (await PostLike.find({ postId: id })).length;
    
    await post.save();

    return res.json({ sucess: true })
} catch (error) {
    return res.status(400).json({ err: error.message })
}
});

router.post("/unlike/:id", verifyUser, async(req, res) => {
    try {
        const { id } = req.params;
        const user_id = req.id;

        const post = await Post.findById(id);
        if(!post) {
            throw new Error("Post does not exist.")
        }
        const existingPostLike = await PostLike.findOne({ id, user_id })
        
        if(!existingPostLike) {
            throw new Error("Post is already not liked.")
        }

        await existingPostLike.remove();
        post.likeCount = (await PostLike.find({ postId: id })).length;

        await post.save();
        return res.json({ success: true });
    }catch(error) {
        return res.status(400).json({error: error.message});
    }
})

router.post("/savePost/:id", verifyUser, async(req, res) => {
    const { id } = req.params;
    const user_id = req.id;

    try {
        const existingSavedPost = await PostSaved.findOne({ data: id, userId: user_id });
        console.log(existingSavedPost);

    if(existingSavedPost) {
        return res.status(403).json({msg: "Post already saved."})
    }
    const data_post = new PostSaved({
        data: id,
        userId: user_id
    });
    
    const savedPost = await data_post.save();
    console.log(savedPost);
    return res.status(200).json(savedPost);

    }catch(error) {
        return res.status(400).json({ error: error.message });
    }
 }
);


router.get("/savedPost", verifyUser, async(req, res) => {
    const user_id = req.id;

    try {
        const savedPosts = await PostSaved.find({ userId: user_id }).select("data -_id");
        const postsIds = []
        for(let i = 0; i<savedPosts.length; i++) {
            postsIds.push(savedPosts[i].data)
        }
        const posts = await Post.find({_id: postsIds});
        return res.status(200).json(posts);

        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
})

router.delete("/deleteSavedPost/:id", verifyUser, async(req, res) => {
    const { id } = req.params;
    const user_id = req.id;

    try {
        const savedPosts = await PostSaved.deleteMany({ userId: user_id, data: id});
        return res.status(200).json({sucess: true});
    } catch(error) {
        return res.status(400).json({ error: error.message });
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

router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post)
})






module.exports = router;
