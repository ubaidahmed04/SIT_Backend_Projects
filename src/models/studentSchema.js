const mongoose  = require("mongoose");

const StudentSchema =  new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique: true
    },
    password : {
        type : String,
        require : true,
    },
    role : {
        type : String,
        enum : ["Admin", "Teacher", "Student"],
        default : "Student"
    },
    marks :{
        type: Number,
        default : 0
    },
},  {timestamps : true})
const Students = mongoose.model("Students", StudentSchema)
module.exports = Students  