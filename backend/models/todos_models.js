import mongoose from "mongoose";




const todosSchema = mongoose.Schema({
    title:{type:String , required:true , unique:true},
    description:{type:String , required:true , unique:true},
    hobby:{type:String , required:true , unique:true},
    // user:{type:Boolean , required:true , unique:true},
    // private:{type:Boolean}
},{timestamps:true})


const Todos = mongoose.model('todos',todosSchema);


export default Todos;