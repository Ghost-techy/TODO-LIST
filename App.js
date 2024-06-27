const express = require("express");
const app = express();
const task = require("./routes/task");
const connectDB = require("./Db/Connect");
const notFound = require("./middlewares/notfound")
const errorHandlerMiddleware = require("./middlewares/errorHandler")

require("dotenv").config();


app.get("/hello",(req,res)=>{
   res.send("task manager app") 
});

app.use(express.json())

app.use("/api/v1/tasks" , task);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = 3000;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
          });
    }catch(error){
    console.log(error);    
    }
};
start();





//api.get('/api/v1/tasks')  - get all the tasks
//app.post('/api/vi/tasks') - create new task
//app.get('/api/vi/tasks/id') - get single task
//app.patch('/api/v1/tasks/:id) -  update task
//app.delete('/api/v1/tasks/:id) - delete task

//ehCOr6DjRP4Womdr-Mongodb password//