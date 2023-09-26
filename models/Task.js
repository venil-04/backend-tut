import mongoose from "mongoose";
const {Schema} = mongoose

const schema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,        //make refference with user model
        ref:"user",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model('task',schema)