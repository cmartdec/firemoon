const Comment = require('../models/Comment')
const router = require('express').Router();

router.get("/getComment", async(req, res) => {
    const { postId } = req.body;
    try {
     const comments = await Comment.find({postId});
     res.status(200).json(comments);
    }catch(error) {
        console.log(error);
        res.status(401).json({msg: error.message})
    }
    
})


module.exports = router;