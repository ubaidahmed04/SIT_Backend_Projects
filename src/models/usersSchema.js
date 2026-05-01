const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique:true
    },
    password : {
        type: String,
        required : true,
        minLength: [6, "Password must be atleast 6 characters"]
        
    },
    age:{
        type: Number,
        required : true
    }
})

const Users = mongoose.model('Users', userSchema)

module.exports= Users 