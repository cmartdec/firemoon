const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            maxlength: 30
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        },
        imageName: {
            type:String
        },
        profilePic: {
            type: String,
            default: "https://i.ibb.co/NLJWvPv/blank-profile-picture-973460-340.webp"
        },
        desc: {
            type: String,
            max: 300,
            default: ""
        }
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);




