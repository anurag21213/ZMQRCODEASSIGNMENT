const { UserModel } = require("../model/UserSchema/user")

const bcrypt=require('bcrypt')

const signupController=async(req,res)=>{
    
        
        const {email,password}=req.body
        const result=await UserModel.findOne({email:email})

        if(result){
            res.send({status:501,message:"User Already exists!!"})
            return
        }

        const hashedpassword=bcrypt.hashSync(password,10)
        
        const newUser=new UserModel({email,password:hashedpassword})

        try {
            await newUser.save()

            res.send({status:201,message:"User Created!!",user:newUser})
        } catch (error) {
            console.log("error");
            
        }

        
        

   
}

module.exports={signupController}