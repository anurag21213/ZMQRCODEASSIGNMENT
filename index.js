const express=require('express')
const mongoose=require('mongoose')

const app=express()
const cors=require('cors')

const loginRouter=require("./routes/loginRoute")
const signupRouter=require("./routes/signupRoute")
const mailRoute=require("./routes/mailRoute")

const connect=async()=>{
    try {
       const res= await mongoose.connect("mongodb+srv://anuragkumar959593:shoes@shoes.ty02c.mongodb.net/")
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