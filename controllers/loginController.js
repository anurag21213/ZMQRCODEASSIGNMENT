const { UserModel } = require("../model/UserSchema/user")

const bcrypt=require('bcrypt')

const loginController=async(req,res)=>{
    try {
        
        const {email,password}=req.body

        const getuser=await UserModel.findOne({email:email})

        if(!getuser){
            res.send({status:501,message:"User not exists!!"})
        }
        else{
            const validate=bcrypt.compareSync(password,getuser.password)
            
            if(validate){
                res.send({status:200,message:"Login Success!!",user:getuser})
            }
            else{
                res.send({status:200,message:"Enter correct password!!"})
            }
        }
        

    } catch (error) {
        res.send({status:500,message:"Something went wrong!!"})
    }
}

module.exports={loginController}