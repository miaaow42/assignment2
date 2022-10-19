import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) // parameters
{
    res.render('index', { title: 'About Me' , page: 'about'}); // functions
}

export function DispalyAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Me' , page: 'about'});
}