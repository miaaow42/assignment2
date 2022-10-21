import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessRegisterPage, ProcessLoginPage} from "../Controller/auth";

/* GET(Display) login page. */
router.get('/login', DisplayLoginPage); 

/* GET(Display)  register page. */
router.get('/register', DisplayRegisterPage);



/* GET(Process) login page. */
router.post('/login', ProcessLoginPage);

/* GET(Process)  register page. */
router.get('/register', ProcessRegisterPage);

/* GET(Process)  logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;
