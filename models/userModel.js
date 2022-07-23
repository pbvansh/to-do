
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true,'please add the name']
    },

    email : {
        type : String,
        unique: true,
        required : [true,'please enter your email']
    },

    password : {
        type : String,
        required : [true,'please provide your password']
    }

})

module.exports = mongoose.model('User',userSchema)