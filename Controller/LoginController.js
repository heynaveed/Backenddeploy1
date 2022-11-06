const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../Model/User.model');

const PostLogin= async(req,res)=>{
    const {email,password}=req.body;
    const user = await UserModel.findOne({email})
    if(user){
        const HashedPass=user.password;
        bcrypt.compare(password, HashedPass, function(err, result) {
                    if(err){
                        res.send("something went wrong, try again later");
                    }
                    else{
                                if(result){
                                const token = jwt.sign({ user_id:user._id }, process.env.SECRET);
                                res.send({"msg":"login successfull", "token": token});
                                }
                                else{
                                    res.send("data didn't match")
                                }
                           }
                 });
               } 
}

module.exports={PostLogin};