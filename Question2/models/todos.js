const mongoose =require("mongoose")

const todosSchema = mongoose.Schema({
    name:String,
    description:String,
})

let todosModel = mongoose.model("todos",todosSchema)
module.exports=todosModel;