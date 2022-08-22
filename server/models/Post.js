const mongoose = require("mongoose");
const arrayUniquePlugin = require('mongoose-unique-array');
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
        likes:[{ type:ObjectId, unique: true}],
        comments: {
            type: Number,
        },
        user_id: {
            type: String,
        }

    },
    { timestamps: true }
);

PostSchema.plugin(arrayUniquePlugin);
module.exports = mongoose.model("Post", PostSchema);

