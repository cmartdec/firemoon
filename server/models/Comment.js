const mongoose = require("mongoose");


const CommentSchema = new mongoose.Schema({
    commenter: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: "true"
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: "post",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: "comment"
    },
    children: [
        {
            type: mongoose.Types.ObjectId,
            ref: "comment"
        }
    ],
},
 { timestamps: true }
);

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;

