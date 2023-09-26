import Task from '../models/Task.js'

export const addtask = async(req,res)=>{
    const {title,description} = req.body;

    const newtask = await Task.create({
        title,
        description,
        user:req.user
    })

    res.json({
        success:true,
        newtask
    })
}

export const gettask=async (req,res)=>{
    const id = req.user._id;
    const task =await Task.find({user:id})

    res.json({
        success:true,
        task
    })
}

export const updatetask = async(req,res)=>{
    const {id} =req.params
    const task = await Task.findById(id)

    task.isCompleted=!task.isCompleted;

   await task.save()

   res.json({
        success:true,
        messege:"task updated successfully"
   })
}
export const deletetask = async(req,res)=>{
    const {id} =req.params
    // const task = await Task.findById(id)

    await Task.deleteOne({_id:id})

   res.json({
        success:true,
        messege:"task deleted succesfully"
   })
}

