import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayAboutPage, DisplayContactPage, DisplayLoginPage, DisplayProjectPage, DisplayServicesPage} from "../Controller/auth";

/* GET(Display) home page. */
router.get('/', DisplayLoginPage); 
/* GET(Display)  home page. */
router.get('/home', DisplayLoginPage);

// import {DisplayAboutPage} from "../Controller/index";
/* GET(Display)  about page. */
router.get('/about', DisplayAboutPage);

// import {DisplayProjectPage} from "../Controller/index";
/* GET(Display) projects page. */
router.get('/projects', DisplayProjectPage);

// import {DisplayServicesPage} from "../Controller/index";
/* GET(Display)  services page. */
router.get('/services', DisplayServicesPage);

// import {DisplayContactPage} from "../Controller/index";
/* GET(Display)  contact page. */
router.get('/contact', DisplayContactPage);


export default router;
