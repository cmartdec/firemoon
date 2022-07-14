const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');
const emailValidator = require("email-validator");


router.post("/signup", async(req, res) => {
   const { username, email, password } = req.body;

 try{

    let emailValidated = emailValidator.validate(email);
    
    if(emailValidated) {
        const existingEmail = await User.findOne({
            email: email
        })
       const existingUser = await User.findOne({
            username: username
        })
    
        if(existingEmail) {
            return res.status(400).json({msg: "Email address already exists."});
        }
        if(existingUser) {
            return res.status(400).json({msg: "Username already taken"})
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
    
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    } else {
        res.status(403).json({msg: "Email is not valid."})
    }


 }catch(error){
        res.status(400).json(error);
        console.log(error);
 }
});


router.post("/login", async(req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email});
        if(!user) {
            return res.status(400).json({msg: "Email address doesn't exists."})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) {
            return res.status(403).json({msg: "Invalid credentials."});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT);

        const userPayload = {
            id: user._id,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic,
            desc: user.desc,
        }

        console.log("token >> ", token)
        res.cookie("jwt", token, {
            httpOnly: true,
        }).status(200).json({msg: "Succesfully logged in."});
        }

    catch(error){
        console.log(error);
        res.send(400).json(error);

    }

})

router.get("/logout", verifyToken, async(req, res, next) => {
    try {
        res.clearCookie("jwt");
        console.log("logout sucesfully");
        res.status(200).json({message: "logout succesfully!"})
    } catch(error) {
        res.status(500).send(error);
    }
})

router.put("/update_username", verifyUser, async(req, res, next) => {
    console.log(req.body)
    try {
    if (req.body.length < 3) {
        res.status(401).json({msg: "Username has to have more than 3 characters."});
        return res
    }
    const userUpdated = await User.findByIdAndUpdate(req.id, {username: req.body.username});
    res.status(200).json({msg: "Username updated.", username:req.body.username})
    console.log(userUpdated);
    }catch(error) {
        res.status(404).json({msg: "Something went wrong."})
        console.log(error)
    }
})


router.put("/update_email", verifyUser, async(req, res) => {
    let emailValidated = emailValidator.validate(req.body.email);
    try{
        if (emailValidated) {
         const emailUpdated = await User.findByIdAndUpdate(req.id, {email: req.body.email});
         res.status(200).json({msg: "Email updated."})
         console.log(emailUpdated);
        } else {
            res.status(403).json({msg: "Please introduce a valid email address."})
        }

    }catch(error) {
        res.status(500).json({msgs: "Something went wrong."})
        console.log(error);
    }

})

router.delete("/delete_account", verifyUser, async(req, res, next) => {
    const user = await User.findById(req.id);
    try {
     const isMatch = await bcrypt.compare(req.body.password, user.password);
     if(isMatch) {
      res.status(200).json({msg: "Account deleted"})
      await User.findByIdAndDelete(req.id);
     }else{
         res.status(400).json({msg: "Wrong password"})
     }
    }catch(error) {
        console.log(error);
    }
})

router.put("/update_password", verifyUser, async(req, res) => {
    const { oldPassword, newPassword } = req.body;
    const newSalt = await bcrypt.genSalt(10);
    const newPasswordHashed = await bcrypt.hash(newPassword, newSalt)
    const user = await User.findById(req.id);
    if(!user) {
        res.status(403).json({msg: "You are not authorized."})
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if(isMatch) {
        await User.findByIdAndUpdate(req.id, {password: newPasswordHashed});
        res.status(200).json({msg: "Password updated."})
    }else {
        res.status(403).json({msg: "Incorrect current password."})
    }
})

router.put("/update_bio", verifyUser, async(req, res) => {
    try {
    const user = await User.findById(req.id);
    if(!user) {
        res.status(403).json({msg: "You are not authorized to update the bio."})
    }
     await User.findByIdAndUpdate(req.id, {desc: req.body.bio});
     res.status(200).json({msg: "Bio updated.", desc: req.body.bio})

    }catch(error) {
        res.status(401).json({msg: "Something went wrong."})
    }
})

router.post("/forgot", async(req, res) => {
    const { email } = req.body;
    let emailValidate = emailValidator.validate(email);
    if (emailValidate) {
        const user = await User.findOne({email: email});
        if(!user) {
            return res.status(401).json({msg: "User not found."})
        }
        res.status(200).json({msg: "Please check your inbox, We've sent you an email"})
        const reset_token = jwt.sign({id: user._id}, process.env.JWT, {expiresIn: "15m"});
        console.log(`Please enter the link and follow the instructions. http://localhost:3000/reset/${reset_token}`)
    }else {
        res.status(401).json({msg: "Email is not valid"})
    }
})

router.put("/reset/:token", async(req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, Number(10))
    console.log(token)

    try {

    const tokenValidated = jwt.verify(String(token), process.env.JWT);
    console.log(tokenValidated);
    console.log(tokenValidated.id);
    const user_id = tokenValidated.id
    const user = await User.findById(user_id);
    if (!user) {
        res.status(401).json({msg: "User not found"})
    }
        const passwordUpdated = await User.findByIdAndUpdate(user_id, {password: hashedPassword})
        if(passwordUpdated) {
         res.status(200).json({msg: "Password updated."})
        }else {
            res.status(400).json({msg: "Something went wrong. Please try again"})
        }
    }catch(error) {
        res.status(400).json({msg: "Something went wrong. Please try again"})
        console.log(error);
    }
})

router.get("/getUserData", verifyUser, async(req, res) => {
    const user = await User.findById(req.id);
    const {username, email, ...others } = user;
    res.status(200).json({username: username, email: email});
    
})


router.get("/example", verifyToken, (req, res) => {
    res.status(200).json({msg: "nice, jwt recieved"})

})

router.get("/example_user/:id", verifyUser, (req, res) => {
    res.send("hello user")
})

module.exports = router;



