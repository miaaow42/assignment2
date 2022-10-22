// import express from 'express';
// const router = express.Router();

// //import the controller module
// import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessRegisterPage, ProcessLoginPage} from "../Controller/auth";

// /* GET(Display) login page. */
// router.get('/login', DisplayLoginPage); 

// /* GET(Display)  register page. */
// router.get('/register', DisplayRegisterPage);



// /* GET(Process) login page. */
// router.post('/login', ProcessLoginPage);

// /* GET(Process)  register page. */
// router.get('/register', ProcessRegisterPage);

// /* GET(Process)  logout page. */
// router.get('/logout', ProcessLogoutPage);

// export default router;

import express from 'express';
const router = express.Router();

import { DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage } from '../Controller/auth';

/* Display Login page. */
router.get('/login', DisplayLoginPage);

/* Display Register page. */
router.get('/register', DisplayRegisterPage);


/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);


/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;

