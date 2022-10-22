import express from 'express';

//need passport functionality
import passport from 'passport';

// need to include the user model fir authentication functions
import User from '../Models/user';

// Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) // parameters
{
    res.render('index',{title: 'Login',page: 'login',messages: req.flash("loginMessage"), displayName: ''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title: 'Register',page: 'Register',messages: req.flash('RegisterMessage'), displayName: ''});
}


// Process login page Functions
// this is a self calling function that passes in req, res, next 3 objects from the signature
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) // 3 signature
{
    passport.authenticate('local',function(err,user,info)
    {
        // having server errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        } 

        // having login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            res.redirect('/login');
        }

        // no issues
        req.logIn(user,function(err)
        {
            // having database error or any errors
            if(err)
            {
                console.error(err);
                res.end(err);
            }
            return res.redirect('/album-list');
        });
    })(req,res,next);
}

export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
   
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}


 // render here is for generate(draw) page; 
    // index(./View/index.ejs) here is the template;
    // title here is property
    // Home here is the object being passed to the index template