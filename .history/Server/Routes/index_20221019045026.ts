import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayHomePage} from "../Controller/index";

/* GET(Display) home page. */
router.get('/', DisplayHomePage); // render here is for generate(draw) page; 
    // index(./View/index.ejs) here is the template;
    // title here is property
    // Home here is the object being passed to the index template

/* GET(Display)  home page. */
router.get('/home', DisplayHomePage);

import {DispalyAboutPage} from "../Controller/index";
/* GET(Display)  about page. */
router.get('/about', DispalyAboutPage);

import {DisplayProjectPage} from "../Controller/index";
/* GET(Display) projects page. */
router.get('/projects', DisplayProjectPage);

import {DisplayServicesPage} from "../Controller/index";
/* GET(Display)  services page. */
router.get('/services', DisplayServicesPage);

import {DisplayContactPage} from "../Controller/index";
/* GET(Display)  contact page. */
router.get('/contact', DisplayContactPage);

export default router;
