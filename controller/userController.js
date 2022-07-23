const User = require('../models/userModel')

const signupUser = async (req, res) => {
    const {name,password,email}= req.body
    const user = await User.create({name,password,email})
    res.status(201).json(user);
}

const getAllUser = async(req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}

const getStaticUser = async(req, res) => {
    const id = req.params.id;
    const users = await User.findById(id)
    res.status(200).json(users)
}

const loginUser = async(req,res)=>{
    const {email , password} = req.body;
    console.log(hawiurhwer);
    const user = await User.findOne({email})

    if(!user){
        res.status(400).json({message : 'invalid email'})
    }

    if(user.password == password){
        res.status(200).json(user)
    }
    else{
        res.status(400).send('please enter correct password')
    }

}

module.exports = {

    signupUser,
    getAllUser,
    getStaticUser,
    loginUser
}