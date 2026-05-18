const mongoose  = require("mongoose");

const StudentSchema =  new mongoose.Schema({
    name : {
        type : String,
        // required : true,
    },
    email : {
        type : String,
        // required : true,
        unique: true
    },
    password : {
        type : String,
        // required : true,
    },
    course : {
        type : String,
        // required : true,
        
    },
    marks :{
        type: Number,
        default : 0
    },
},  {timestamps : true})
const Students = mongoose.model("Students", StudentSchema)
module.exports = Students  