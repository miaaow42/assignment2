import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, DisplayProcessPage, ProcessLoginPage} from "../Controller/auth";

/* GET(Display) home page. */
router.get('/', DisplayLoginPage); 
/* GET(Display)  home page. */
router.get('/home', DisplayLoginPage);

// import {DisplayAboutPage} from "../Controller/index";
/* GET(Display)  about page. */
router.get('/about', DisplayRegisterPage);

// import {DisplayProjectPage} from "../Controller/index";
/* GET(Display) projects page. */
router.get('/projects', DisplayProcessPage);

// import {DisplayServicesPage} from "../Controller/index";
/* GET(Display)  services page. */
router.get('/services', ProcessLoginPage);

// import {DisplayContactPage} from "../Controller/index";
/* GET(Display)  contact page. */
router.get('/contact', ProcessLogoutPage);


export default router;
