const express = require('express')
const route = express.Router();
const {
    signupUser,
    getAllUser,
    getStaticUser,
    loginUser,
} = require('../controller/userController')

route.get('/',getAllUser)
route.get('/:id',getStaticUser)
route.post('/signup',signupUser)
route.post('/login',loginUser)

module.exports = route