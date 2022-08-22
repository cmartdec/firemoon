const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

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
        likes:[{ type:ObjectId, ref:"User", unique: true}],
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

