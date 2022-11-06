const {Router}= require("express");
const { PostSignUp } = require("../Controller/SignupController");


const SignUp= Router();
SignUp.post("/",PostSignUp);
module.exports={SignUp};