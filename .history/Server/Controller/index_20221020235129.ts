import exp from 'constants';
import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) // parameters
{
    res.render('index', { title: 'Home' , page: 'home',displayName:''}); // functions
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Me' , page: 'about',displayName:''});
}
    // render here is for generate(draw) page; 
    // index(./View/index.ejs) here is the template;
    // title here is property
    // Home here is the object being passed to the index template


export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Projects',page:'projects' ,displayName:''});
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Services',page:'services',displayName:'' });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me',page:'contact' ,displayName:''});
}

// Temporary
