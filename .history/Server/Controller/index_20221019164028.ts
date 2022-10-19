import exp from 'constants';
import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) // parameters
{
    res.render('index', { title: 'Home' , page: 'home'}); // functions
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Me' , page: 'about'});
}
    // render here is for generate(draw) page; 
    // index(./View/index.ejs) here is the template;
    // title here is property
    // Home here is the object being passed to the index template


export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Projects',page:'projects' });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Services',page:'services' });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me',page:'contact' });
}

// Temporary
import Album from '../Models/album';
export function DisplayAlbumList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Album.find(function(err,albumCollection)
    {
       if(err)
       {
           console.error(err);
           res.end(err);
       } 
       res.render('index',{title:'Album List', page: 'album-list', album: albumCollection});
    });
}