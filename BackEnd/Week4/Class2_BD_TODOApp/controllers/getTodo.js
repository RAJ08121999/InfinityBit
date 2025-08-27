//import the model
const Todo = require ('../models/todo');

//define route handler

exports.getTodo = async(req , res)=>{
    try{
        //fetch all todo items from database;
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todo data is fetched"
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
    }
}


exports.getTodoById = async (req,res)=>{
    try{
        //extract todo item basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        // if data for given id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id"
            })
        }
        //if id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
    }
}