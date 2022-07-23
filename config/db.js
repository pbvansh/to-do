require('dotenv').config()
const mongoose = require('mongoose')
const URL = process.env.MONGO_URI

const coonectDB = async()=>{
    try {
       const conn = await mongoose.connect(URL)
       console.log("connect to : "+conn.connection.host);

    } catch (error) {
        console.log(error);
    }
}

module.exports = coonectDB