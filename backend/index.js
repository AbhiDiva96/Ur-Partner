const express = require("express");
const { createTodo, updateTodo } = require("./type");
const app = express();

app.use(express.json());

//creating todo section in backend
app.post('/todo', function(req, res){
        const createPayload =  req.body;
        const parsePayload = createTodo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
                msg : " you sent wrong input"
            })
            return;
        }
        //put data in to mognodb database

})

//geting all the todos
app.get('/todos', function(req, res){
       
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