const mongoose = require("mongoose");

const ContributeSchema = new mongoose.Schema(
    {
        data:{
            type: String,
            required: true
        },
        author: {
            type: String,
            required: false
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contribute", ContributeSchema);
