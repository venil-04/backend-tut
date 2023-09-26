import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model('user',userSchema)