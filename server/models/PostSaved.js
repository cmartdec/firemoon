const mongoose = require("mongoose");

const PostSaved= new mongoose.Schema(
    {
        data: {
            type: mongoose.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        userId: {
            type: String,
            ref: "user",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("postSaved", PostSaved);






