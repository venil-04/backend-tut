import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const isAuthenticated= async (req,res,next)=>{
    
    const {token} = req.cookies;

    if(!token){
        return res.json({
            success:false,
            messege:'login first'
        })
    }

    const decoded = jwt.verify(token,process.env.JWT_KEY)

    req.user = await User.findById(decoded._id)
   
   next()
}