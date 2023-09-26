import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getuser = async (req,res)=>{
    const user =await User.find({})

    res.json({
        success:true,
        user
    })

}

export const registeruser = async(req,res)=>{
    const {name,email,password} = req.body

    let user = await User.findOne({email})
    console.log(user)
    
    if(user){
        return res.json({
            success:false,
            messege:'user already exist!'
        })
    }

    const hashedpass = await bcrypt.hash(password,10)
    user = await User.create({name,email,password:hashedpass})
    const token = jwt.sign({_id:user._id},process.env.JWT_KEY)
    
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:1000*60*10
    }).status(201).json({
        success:true,
        user
    })
}

export const loginuser = async(req,res)=>{
    const {email,password}= req.body
    const user = await User.findOne({email}).select("+password")       
    
    if(!user){
        return res.json({
            success:false,
            messege:'user does not exist!'
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return res.status(404).json({
            success:false,
            messege:'email or password does not match!'
        })
    }

    const token = jwt.sign({_id:user._id},process.env.JWT_KEY)
    
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:1000*60*10
    }).status(200).json({
        success:true,
        messege:`welcome back ${user.name}`,
        user
    })
    console.log(req.cookies)
}

export const getuserprofile= async (req,res)=>{

    res.json({
        success:true,
        user: req.user
    })
}

export const logoutuser = (req,res)=>{
    cookies.remove();
}