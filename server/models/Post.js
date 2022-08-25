const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        data:{
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        author: {
            type: String,
            required: false
        },
        comments: {
            type: Number,
        },
        user_id: {
            type: String,
        }


    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

