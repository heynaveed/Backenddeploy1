const { TodoModel } = require("../Model/Todo.model");

const PostTodo=async(req,res)=>{
    const {title,status,user_id}=req.body;
   const newTodo= new TodoModel({
    title:title,
    status:status,
    user_id:user_id
   })
   await newTodo.save();
   console.log(newTodo);
   res.send("todo added successfull");

}

const GetTodo=async(req,res)=>{
    const {user_id}=req.body;
    const Todos= await TodoModel.find({user_id:user_id});
    console.log(Todos);
    res.send(Todos);
}

const PatchTodo=async(req,res)=>{
    const payload=req.params.todoid;
    const newstatus=req.body.status;
    await TodoModel.updateOne({_id:payload},{$set:{status:newstatus}});
    res.send("Updated Successfull");

}

const DeleteTodo=async(req,res)=>{
     const payload=req.params.todoid;
     await TodoModel.deleteMany({_id:payload});
     res.send("Deleted successfully");
}

module.exports={
    PostTodo,
    GetTodo,
    PatchTodo,
    DeleteTodo
}