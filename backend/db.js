/*
Todo{
    title: string,
    description: string,
    completed : boolean
}
*/
const mongoose = require("mongoose")
const { string, boolean } = require("zod")
//mongodb+srv://abhidiva:%401Abhimongodb@cluster0.jy41f05.mongodb.net/
mongoose.connect("DATABASE_url")

const todoSchema = mongoose.Schema({
      title : String,
      descriptions: String,
      completed : Boolean
})

 const todo = mongoose.model('todos', todoSchema);

module.exports = {
   todo
}