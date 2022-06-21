const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken")
const verifyUser = require('../middlewares/verifyToken');
const emailValidator = require("email-validator");


//route for signup
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


//route for login
router.post("/login", async(req, res) => {
    try {
        let validatedEmail = emailValidator.validate(req.body.email);

        if(validatedEmail) {
        const user = await User.findOne({ email: req.body.email});
        if(!user) {
            return res.status(400).json({msg: "Email address doesn't exists."})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) {
            return res.status(403).json({msg: "Invalid credentials."});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT);


        console.log("token >> ", token)
        res.cookie("jwt", token, {
            httpOnly: true,
        }).status(200).json(user);

        }else {
            res.status(403).json({msg: "Email address is not valid."})
        }

    } catch(error){
        console.log(error);
        res.send(400).json(error);

    }

})

// route for logout
router.get("/logout", verifyToken, async(req, res, next) => {
    try {
        res.clearCookie("jwt");
        console.log("logout sucesfully");
        res.status(200).json({message: "logout succesfully!"})
    } catch(error) {
        res.status(500).send(error);
    }
})

// route for updating the username
router.put("/update_username", verifyUser, async(req, res, next) => {
    try {
    if (req.body.username.length < 3) {
        res.status(401).json({msg: "Username has to have more than 3 characters."});
        return res
    }
    const userUpdated = await User.findByIdAndUpdate(req.id, {username: req.body.username});
    res.status(200).json({msg: "Username updated."})
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
    try {
    await User.findByIdAndDelete(req.id);
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
        console.log("error, user not found");
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if(isMatch) {
        const passwordUpdated = await User.findByIdAndUpdate(req.id, {password: newPasswordHashed});
        res.status(200).json({msg: "Password updated"})
    }else {
        res.status(403).json({msg: "Something went wrong."})
    }


})






// THESE ROUTES HAVE TO BE REMOVED FOR PRODUCTION

router.get("/example", verifyToken, (req, res) => {
    res.send("authorized page!");

})

router.get("/example_user/:id", verifyUser, (req, res) => {
    res.send("hello user")
})

module.exports = router;



