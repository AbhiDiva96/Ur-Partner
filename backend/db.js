/*
Todo{
    title: string,
    description: string,
    completed : boolean
}
*/
const mongoose = require("mongoose")
const { string, boolean } = require("zod")
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