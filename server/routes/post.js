const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');
const PostLike = require("../models/PostLike");
const PostSaved = require("../models/PostSaved");
const Comment = require("../models/Comment");
const moment = require("moment");


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

router.post("/createComment/:id", verifyUser, async(req, res) => {

    try {

        const { id } = req.params;
        const user_id = req.id;
        const { content } = req.body;

        const post = await Post.findById(id);

        if(!post) {
            return res.status(400).json({ msg: "Post was not found."})
        }
        
        const comment = await Comment.create({
            commenter: user_id,
            content,
            post: id
        });

        post.comments += 1;
        await post.save();

        await Comment.populate(comment, { path: "commenter", select: "-password" })
       
            // INTRODUCE MANUALLY USER INSIDE OF COMMENT COLLECTION        
            // search user based on "user_id" in the database, take photo, id, and nickname and put it in
            // commenter field above.

        return res.status(200).json(comment);

    } catch(error) {
        return res.status(400).json({ error: error.message });
    }
})

router.get("/getPostComments/:id", async(req, res) => {
    try {
        const { id } = req.params;

        const comments = await Comment.find({ post: id }).populate("commenter", "-password");

        return res.status(200).json(comments);

    } catch(error) {
        return res.status(400).json({ error: error.message });

    }
})

router.delete("/deleteComment/:commentId", verifyUser, async(req, res) => {
    const { commentId } = req.params;
    const user_id = req.id;

    try {
        const comment = await Comment.findById(commentId);
        if(String(comment.commenter) === user_id) {
            await Comment.findByIdAndDelete(commentId);
            const post = await Post.findById(comment.post);
            post.comments -= 1;
            post.save();
            return res.status(200).json({ success: true })
        } else {
            return res.status(403).json({msg: "You are not authorized."})
        }
    }catch(error) {
        return res.status(400).json({ error: error.message });
    }
})

router.post("/createReply/:parentId", verifyUser, async(req, res) => {
    const { parentId } = req.params;
    const user_id = req.id;
    const { content } = req.body;

    const date = new Date();

    const isoStr = date.toISOString();
    // const date_created_moment = moment.utc(date_created).local().startOf('seconds').fromNow()

    try {
        const comment = await Comment.findById(parentId);
        const user = await User.findById(user_id);
        const { username, profilePic } = user;
        // populate user
        const reply = {
            username: username,
            photoPic: profilePic,
            content: content,
            createdAt: isoStr
        }
        const commentReplied = await Comment.updateOne(
            { _id: parentId },
            { $push: { children: reply }}
        )
        
        
        return res.status(200).json(user);
    }catch(error) {
        console.log(content)
        return res.status(400).json({ error: error.message });
    }
})


router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post)
})






module.exports = router;
