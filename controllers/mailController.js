const nodemailer = require("nodemailer");

const mailController=async(req,res)=>{
    const testAccount=await nodemailer.createTestAccount()
    const {email}=req.body

    console.log(email)
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'dixie.nolan80@ethereal.email',
            pass: 'BrMJky9QWcQXb4m3GT'
        }
    });


    const info = await transporter.sendMail({
        from: '"Shoes Ecommerce" <dixie.nolan80@ethereal.email>', // sender address
        to: email, // list of receivers
        subject: "Order Confirmation mail ✔", // Subject line
        text: "Your Order has been placed successfully and will be delivered soon.", // plain text body
        html: "<b>Hello world?</b>", // html body
      });


      console.log("Message sent: %s", info.messageId)
      res.json(info)
}


module.exports={mailController}