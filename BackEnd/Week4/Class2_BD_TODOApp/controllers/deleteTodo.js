//importing the models

const Todo = require('../models/todo');

exports.deleteTodo = async (req , res )=>{
    try{

        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            data:todo,
            message:` Todo ${id} deleted successfully`
        })
    }
    catch(error){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
    }
}