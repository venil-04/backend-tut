import express from 'express'
import { getuserprofile, loginuser, logoutuser, registeruser } from '../controller/user.js';
import { isAuthenticated } from '../middlewares/auth.js';


const router = express.Router();

router.route('/login').post(loginuser)
router.route('/logout').post(logoutuser)
router.route('/register').post(registeruser)
router.route('/getuserprofile').get(isAuthenticated , getuserprofile)

export default router