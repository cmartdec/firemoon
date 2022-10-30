const router = require("express").Router();
const User = require("../models/User");
const multer = require("multer");
const sharp = require("sharp");
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const dotenv = require("dotenv");
const crypto = require("crypto");
const verifyUser  = require('../middlewares/verifyToken');


dotenv.config();

const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

const BUCKET_NAME = process.env.BUCKET_NAME;
const BUCKET_REGION = process.env.BUCKET_NAME; 
const ACCESS_KEY = process.env.ACCESS_KEY; 
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY; 

const s3 = new S3Client({
    credentials: {
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
    },
    region: "eu-west-3"
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const middleware = {
    auth: verifyUser,
    uploader: upload.single('image')
}

router.post("/upload", [middleware.auth, middleware.uploader], async(req, res) => {
    const file = req.file;
    const realBuffer = file.buffer;

    const imageName = randomImageName();

    const user_id = req.id
    const params = {
        Bucket: BUCKET_NAME,
        Key: imageName,
        Body: realBuffer,
        ContentType: req.file.mimetype,
    }

    const command = new PutObjectCommand(params);
    await s3.send(command);
    const user = await User.findByIdAndUpdate(user_id, { imageName: imageName });

    res.send(user);

})

router.get("/mydata", verifyUser, async(req, res) => {
     const user = await User.findById(req.id).select("-password");
    try {
        if(user.imageName){
     const getObjectParams = {
         Bucket: BUCKET_NAME,
         Key: user.imageName
     }
     const command = new GetObjectCommand(getObjectParams);
     const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
     user.profilePic = url;
     await user.save();
     return res.status(200).json(user)

        } else {

     res.status(200).json(user);
        }
    }catch(error){
        return res.status(403).json(error)
    }
})

module.exports = router;
