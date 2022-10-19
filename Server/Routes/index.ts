import express from 'express';
const router = express.Router();

/* GET(Display) home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', page: 'home'});
}); // render here is for generate(draw) page; 
    // index(./View/index.ejs) here is the template;
    // title here is property
    // Home here is the object being passed to the index template

/* GET(Display)  home page. */
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET(Display)  about page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Me' , page: 'about'});
});

/* GET(Display) projects page. */
router.get('/projects', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'My Projects',page:'projects' });
});

/* GET(Display)  services page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Services',page:'services' });
});

/* GET(Display)  contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact Me',page:'contact' });
});

export default router;
