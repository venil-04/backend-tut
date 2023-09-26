import express from 'express'
import { isAuthenticated } from '../middlewares/auth.js';
import { addtask, deletetask, gettask, updatetask } from '../controller/task.js';

const router = express.Router();

router.route('/add').post(isAuthenticated,addtask)
router.route('/mytask').get(isAuthenticated,gettask)
router.route('/:id').put(updatetask).delete(deletetask)

export default router