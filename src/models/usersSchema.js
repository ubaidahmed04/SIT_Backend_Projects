const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Password must be atleast 6 characters"]

    },
    role: {
        type: String,
        enum: ["admin", "teacher", "student"],
        default: "student"
    }
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users 