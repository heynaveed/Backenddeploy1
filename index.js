const express =require ("express");
const { Connection } = require("./config/db");
const { logIn } = require("./Routes/logIn.route");
const { SignUp } = require("./Routes/signUp.route");
const { MyTodos } = require("./Routes/Todo.route");
require("dotenv").config();
const app= express();
const PORT=process.env.PORT || 8500
app.use(express.json());

app.get ("/",(req,res)=>{
    res.send("Hello from backend");
})

app.use("/login",logIn);
app.use("/signup",SignUp)
app.use("/todo",MyTodos)

app.listen(PORT,async()=>{
   try{
    await Connection
    console.log("Connection to DB successfull");
   }
   catch(err){
    console.log("error in connecting in db");
    console.log(err)
   }
    console.log(`Listening to Port ${PORT}`)
})