const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const app=express()
const cors=require('cors')

const loginRouter=require("./routes/loginRoute")
const signupRouter=require("./routes/signupRoute")
const mailRoute=require("./routes/mailRoute")

const connect=async()=>{
    try {
        // console.log(process.env.MONGOURI)
       const res= await mongoose.connect(process.env.MONGOURI)
        if(res)
            console.log("connected...")
    } catch (error) {
        console.log(error);
        
    }
}

connect()

app.use(cors())
app.use(express.json())



app.use('/api',loginRouter)
app.use('/api',signupRouter)
app.use('/api',mailRoute)


app.get('/',(req,res)=>{
    res.send({"message":"success"})
})



app.listen(3000)