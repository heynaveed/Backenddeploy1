const express =require ("express");
require("dotenv").config();
const app= express();
const PORT=process.env.PORT || 8500
app.use(express.json());

app.get ("/",(req,res)=>{
    res.send("Hello from backend");
})

app.get("/about",(req,res)=>{
    res.send("about page is here");
})

app.listen(PORT,()=>{
    console.log(`Listening to Port ${PORT}`)
})