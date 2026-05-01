const Users = require("../models/usersSchema");

const getUsersController = async (req ,res)=>{
    // const userData = await Users.find({ age : {$gt : 18}})
    // const userData = await Users.find().sort('-age')
    // const userData = await Users.find().limit(2).skip(3)

        if(userData.length == 0 ){ 
        res.status(200).json({
        status: true,
        message: "No record avalaible",
    })    
        }
        res.status(200).json({
        status: true,
        message: "User get successfully",
        data : userData
    })
}

const userRegister = async(req ,res)=>{
    try {
        const { name , password , age} = req.body;
        await Users.create({
            name , 
            password, 
            age
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


const userLogin = (req ,res)=>{
        res.status(200).json({
        status: true,
        message: "User Login Success"
    })
}
module.exports = { getUsersController , userRegister, userLogin }