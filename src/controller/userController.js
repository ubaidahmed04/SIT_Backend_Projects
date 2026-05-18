const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const Users = require("../models/usersSchema");
const cloudinary = require("../config/cloudinaryConfig");
const generateToken = require("../utils/generateToken");

const updateUser =async (req, res) =>{
    const updatedData = req.body;
    const token = req.headers.authorization?.split(" ")[1]
    const isValid = jwt.verify(token, process.env.JWT_SECRET)
    console.log(isValid)
    if(isValid){
        await Users.findByIdAxndUpdate(isValid.id,updatedData)
        return res.status(200).json({
            status: true,
            message: "User Updated Successfully",
        })    

    }

}

const getUsersController = async (req, res) => {
    // const userData = await Users.find({ age : {$gt : 18}})
    // const userData = await Users.find().sort('-age')
    // const userData = await Users.find().limit(2).skip(3)

    if (userData.length == 0) {
        res.status(200).json({
            status: true,
            message: "No record avalaible",
        })
    }
    res.status(200).json({
        status: true,
        message: "User get successfully",
        data: userData
    })
}

const userRegister = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                status: false,
                message: "All Field are Required"
            })
        }
        // check existingUser first 
        // const 
        const hashPass = await bcrypt.hash(password, 10 )
        console.log("Hash Password",hashPass)
        await Users.create({
            name, email, password :hashPass, role : role.toLowerCase()
        })
        res.status(200).json({
            status: true,
            message: "User register Success"
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })

    }
}


const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            status: false,
            message: "All Field are Required"
        })
    }
    const currUser = await Users.findOne({ email })
    console.log(currUser)
    if (!currUser) {
        return res.status(400).json({
            status: false,
            message: "User Not Found"
        })
    }
    const isMatch = await bcrypt.compare(password, currUser.password )
    if(!isMatch){
       return  res.status(403).json({
        status: false,
        message: "Invalid Credentials",
    })
    }
    // const token = jwt.sign({id : currUser._id, role : currUser.role}, process.env.JWT_SECRET)
    const token = generateToken(currUser)
    res.status(200).json({
        status: true,
        message: "User Login Success",
        token
    });
}

const addUser =async (req, res) =>{
    let file = req.file;
    console.log(file)
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    file = req.file.path
    try{
    const result = await cloudinary.uploader.upload(file, {
      folder: 'school_project',  // Save in this folder on Cloudinary
    });
    console.log(result)



        res.status(200).json({
        status: true,
        message: "User Add Success",
        data : result
    });
    }catch(err){
        res.status(500).json({
        status: false,
        message: err.message,
    });
    }
}
module.exports = { getUsersController, userRegister, userLogin , updateUser, addUser}