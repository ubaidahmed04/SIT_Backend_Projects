const jwt = require("jsonwebtoken");
const Users = require("../models/usersSchema");

const updateUser =async (req, res) =>{
    const updatedData = req.body;
    const token = req.headers.authorization?.split(" ")[1]
    const isValid = jwt.verify(token, process.env.JWT_SECRET)
    console.log(isValid)
    if(isValid){
        await Users.findByIdAndUpdate(isValid.id,updatedData)
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

        await Users.create({
            name, email, password, role
        })
        res.status(200).json({
            status: true,
            message: "User register Success"
        })

    } catch (error) {
        res.status(500).json({
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
    const isUser = await Users.findOne({ email })
    console.log(isUser)
    if (!isUser) {
        return res.status(400).json({
            status: false,
            message: "User Not Found"
        })
    }
    const token = jwt.sign({email, id : isUser._id}, process.env.JWT_SECRET)
    res.status(200).json({
        status: true,
        message: "User Login Success",
        token
    })
}
module.exports = { getUsersController, userRegister, userLogin , updateUser}