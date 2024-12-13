import mongoose from "mongoose";




const todosSchema = mongoose.Schema({
    title:{type:String , required:true , unique:true},
    description:{type:String , required:true , unique:true},
    hobby:{type:String , required:true , unique:true},
    // due_date:{type:String},
},{timestamps:true})


const Todos = mongoose.model('todos',todosSchema);


export default Todos;