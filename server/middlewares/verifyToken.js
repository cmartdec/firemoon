const jwt = require("jsonwebtoken");


/**** https://github.com/safak/youtube2022/tree/mern-booking/api */


const verifyToken = (req, res, next) => {
   const cookies = req.headers.cookie;
   const token = cookies.split("=")[1];

    if(!token) {
        res.status(404).json({ message: "No token found"});
    }
    jwt.verify(String(token), process.env.JWT, (err, user) => {
        if(err){
            return res.status(400).json({message: "Invalid token"});
        }
        console.log(user.id);
        req.id = user.id;
    })
    next();
}

const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if( req.id === req.params.id) {
            next();
        }else {
            res.status(401).json({message:"user not found"})
        }

    });
}


module.exports = verifyToken;




