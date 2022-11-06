const { Router } = require("express");
const { PostTodo, GetTodo, PatchTodo, DeleteTodo } = require("../Controller/TodosController");
const { Authentication } = require("../Middleware/Authentication");

const MyTodos=Router();

MyTodos.post("/",Authentication,PostTodo);

MyTodos.get("/",Authentication,GetTodo);

MyTodos.patch("/:todoid",Authentication,PatchTodo);

MyTodos.delete("/:todoid",Authentication,DeleteTodo);

module.exports={MyTodos};

