require('dotenv').config()
const mongoose = require('mongoose')
const marividhi = process.env.MONGO_URI

const connetToMyVidhi = async()=>{
    try {
       const conn = await mongoose.connect(marividhi)
       console.log("connect to : "+conn.connection.host);

    } catch (error) {
        console.log(error);
    }
}

module.exports = connetToMyVidhi