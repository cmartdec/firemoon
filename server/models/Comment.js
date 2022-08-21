const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        data:{
            type: String,
            required: true
        },
        postId: {
            type: String
        },
        author: {
            type: String,
            required: false
        },
        nLikes: {
            type: Number
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
