const mongoose = require('mongoose');

async function connectiondb ()  {
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log("Database is connnected")
    } catch (error) {
        console.log("connection Error")
    }
}

module.exports = connectiondb;