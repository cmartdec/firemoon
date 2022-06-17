const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            min: 3
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
            default: ""
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




