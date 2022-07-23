const express = require('express')
const app = express()
const port = 5000 
const userRoutes = require('./routes/userRoute')
const connetToMyVidhi = require('./config/db')


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')
})

connetToMyVidhi();

app.use(express.json())
app.use('/user',userRoutes)


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))