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
            default: "https://firemoon.s3.eu-west-3.amazonaws.com/Screenshot%202022-10-30%20at%2018.22.19.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCWV1LXdlc3QtMyJHMEUCIHH7gQ3RHj%2F%2BhJvKlFDS0R1Q7kQUXzM78c2PmgUkkzWxAiEAoMQoao8WR57%2BQ6G4I6QDVRhLKTOy6WWHRDMKpHFW8P8q5AIIYBAAGgwzMzM2NjMyNjI2MDciDLY85JpRgx17y7sIGyrBAvvNHqYKmYkVaMHFZG0JT1DLzK0cq%2BzHQ1F3WNf6IEVBJG0lJKK2v%2B%2F9OS2gjhXB8rlmzxNSpvqX1YidfD9yy72Wvd3j8LGPK1bKL35qRLQKJ3t96qXMeBrSzimG5hXQR%2FxdN7E6ItuTQDRm1Txa2bxR0XwKg8eqrKIi1H69aTXOlPp%2BAacBsEc6LWWf8vIf8s8d4qBsUlelLV4pnR4HvAP5Wl1l9%2BLFyzquNJw6Et7LFYpIsHeNpVOK0BWdZa3c5sCHs7euivFmGduY6sNSNEBoU%2BPnLwKD%2Bzm0AF082olEn7kqvMTa51WUSC6hCeKAhWR5HsrAO2wYS15wHwtBzyW6hRMzAxCGy9%2Fg285UVcilK6L9CzFbsHYH1n6zlKbI7v0BTkMrpA%2BhqSpPvJAgS6AS0Av69Q0ZwQ2gnGEFyAUBIjDnp%2FqaBjqzAoUFwqB1d5QhlbR5dwu6p7OeZ0YNWuekbsbHYtu%2B7ci9e6hDcFCeNHIaP510AvSrmUVqXAbxx7SHvZ%2FGVgXOyF79VVG80Sb9KJUpEGlU7Y83lhV0HrcHuaoAMSrWPYTXzI1ytsUN3M1%2F2NiFeH9OR2ka5uJBen%2BDzHk0XWbQN3nB9o27O%2Bk2nLJ6Id1aMOohQUsIjplc5Z2lPs5m0Z0rtvK9RznC%2FJzsRw7u%2B5U%2B2NMIYccsJj9s9Jgw7Abv4HFCsEMHvEX5iyZLLvJaSWaxYbFsroD7QoPjuAbOhRcjRumetAkj0TO3tzDqLAhe3GhwJ4bmBXJ%2FTwGxyQKADCS92L14IME6Ekenl5ZOZQzDs64blouUCYF7y1c6MLYQY6FDcl43nzEVWherMG8JqwISqmZgCxQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221030T172559Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAU3L7BK6H3OSFAPHG%2F20221030%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Signature=3d989d2ba354ddd2603ccfdde227920107a5bcbbf2a03bfbc159576c0e8a84c4"
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




