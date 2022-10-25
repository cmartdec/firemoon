const router = require("express").Router();
const multer = require("multer");
const sharp = require("sharp");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");
const crypto = require("crypto");


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


router.post("/upload", upload.single('image'), async(req, res) => {
    const file = req.file;
    const fileBuffer = await sharp(file.buffer).resize({ height: 1920, width: 1080, fit: "contain" }).toBuffer() 


    const params = {
        Bucket: BUCKET_NAME,
        Key: randomImageName(),
        Body: fileBuffer,
        ContentType: req.file.mimetype,
    }

    const command = new PutObjectCommand(params)
    await s3.send(command);

    res.send({});

    //const fileBuffer = await sharp(file.buffer).resize({ height: 1920, width: 1080, fit: "contain" }).toBuffer() 
})

router.get("/hello", (req, res) => {

    console.log(process.env.BUCKET_REGION);
})

module.exports = router;
