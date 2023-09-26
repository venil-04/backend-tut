import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

export const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','PUT','POST','DELETE'],      //option of cors
    credentials:true
}))
app.use('/api/v1/user',userRouter)
app.use('/api/v1/task',taskRouter)

dotenv.config({
    path:'./data/config.env'
});


