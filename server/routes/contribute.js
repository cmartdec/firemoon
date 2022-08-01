const router = require('express').Router();
const Contribute = require('../models/Contribute');
const verifyUser = require('../middlewares/verifyToken')

router.post("/", verifyUser, async(req, res) => {
    const { data, author } = req.body;

    const newContribute = new Contribute({
        data: data,
        author: author
    });

    try {
        if(!data) {
            res.status(401).json({msg: "Please introduce a body text."})
        }
        if(!author) {
            res.status(403).json({msg: "Please log in."})
        }

        const savedContribute = await newContribute.save();
        console.log(savedContribute);
        return res.status(200).json(savedContribute);


    } catch(error) {
        res.status(500).json({msg: "Something went wrong.", error: error})
    }
})

module.exports = router;



