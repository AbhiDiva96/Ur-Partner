const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const app = express();

app.use(express.json());

//creating todo section in backend
app.post('/todo', async function(req, res){
  const createPayload =  req.body;
        const parsePayload = createTodo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
                msg : " you sent wrong input"
            })
            return;
        }
        //put data in to mognodb database
    await todo.create({
         title: createPayload.title,
         description: createPayload.description,
         completed : false
     })
     res.json({
        msg : "Todo created"

     })
})

//geting all the todos
app.get('/todos', function(req, res){
      const todos  = todo.find({})
    //  console.log(todos) //promices


     res.json({
        todos
     })
})

//checking point for todos
app.put('/completed', function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
         res.status(411).json({
            msg : "you send the wrong input"
         })
         return;
    }

})


app.listen('3000')
//writing backend express boilerplate code,
//with express.json() middleware