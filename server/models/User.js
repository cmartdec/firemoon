const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minlength: 5,
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
        profilePic: {
            type: String,
            default: "https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"
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




