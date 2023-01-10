const express =require("express")
const router = express.Router();
const todosModel = require('../models/todos')

//To get Post form
router.get('/form',async(req,res)=>{
    res.render('form')
})

//To get Update Form
router.get('/update',async(req,res)=>{
    res.render('updateForm')
})


//To get Al Todos
router.get('/get',async(req,res)=>{
    let todos = await todosModel.find();
    res.status(200).render('Display',{todos})
})

//To get One Todo
router.get('/get/:id',async(req,res)=>{
    let todo = await todosModel.findById(req.params.id);
    res.status(200).send(todo)
})

//To Post Todo
router.post('/add',async(req,res)=>{
    let todo = new todosModel();
    todo.name =req.body.name;
    todo.description =req.body.description;

    await todo.save()
    res.status(200).send(todo)
})

//To Delete Todo
router.get('/delete/:id',async(req,res)=>{
    const todo = await todosModel.findByIdAndDelete(req.params.id)
    res.status(200).send("Deleted")
})

//To update Todo
router.get('/update/:id',async(req,res)=>{
    res.render('updateForm')
    // let todo = await todosModel.findByIdAndUpdate();
    // todo.name =req.body.name;
    // todo.description =req.body.description;

    // await todo.save()
    // res.status(200).redirect('Display')
})
router.post('/form-update',async(req,res)=>{

    let todo = await todosModel.findById(req.params.id);
    todo.name =req.body.name;
    todo.description =req.body.description;

    await todo.save()
    res.status(200).redirect('Display')
})
module.exports =router;