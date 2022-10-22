// import express from 'express';

// export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) // parameters
// {
//     res.render('index', { title: 'Home' , page: 'home',displayName:''}); // functions
// }

// export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
// {
//     res.render('index', { title: 'About Me' , page: 'about',displayName:''});
// }
//     // render here is for generate(draw) page; 
//     // index(./View/index.ejs) here is the template;
//     // title here is property
//     // Home here is the object being passed to the index template


// export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
// {
//     res.render('index', { title: 'My Projects',page:'projects' ,displayName:''});
// }

// export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
// {
//     res.render('index', { title: 'Services',page:'services',displayName:'' });
// }

// export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
// {
//     res.render('index', { title: 'Contact Me',page:'contact' ,displayName:''});
// }

// // Temporary

import express from 'express';

import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About Us', page: 'about', displayName:  UserDisplayName(req) });
}

export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req)  });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req)  });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req)  });
}
