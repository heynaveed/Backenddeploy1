const { Router } = require("express");
const { PostLogin } = require("../Controller/LoginController");

const logIn = Router();

logIn.post("/",PostLogin);

module.exports={logIn};
