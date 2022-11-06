const bcrypt = require('bcrypt');
const { UserModel } = require('../Model/User.model');

const PostSignUp=async(req,res)=>{
    const {email,password}=req.body
    const isUser= await UserModel.findOne({email});
    if(isUser){
       res.send("User Already exists, try logging in")
    }
    else{
       bcrypt.hash(password, 4, async function(err, hash){
             if(err){
               res.send("Something went Worng Please Signup Later")
             }
             const userdata=new UserModel({
               email:email,
              password: hash
           })
           await userdata.save();
           const data= await UserModel.findOne({email})
           console.log(data)
           res.send("Signup sucessfull")
       }  )
    }
}
module.exports={PostSignUp};