import express from 'express';

//need passport functionality
import passport from 'passport';

// need to include the user model fir authentication functions
import User from '../Models/user';

// Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) // parameters
{
    res.render('index',{title: 'Login',page: 'login',messages: req.flash('loginMessage'), displayName: ''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title: 'Register',page: 'Register',messages: req.flash('RegisterMessage'), displayName: ''});
}


// Process login page Functions

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) // 3 signature
{   
    // this is a self calling function that passes in req, res, next 3 objects from the signature
    passport.authenticate('local',function(err,user,info)
    {
        // having server errors?
        if(err)
        {
            console.error(err);
            res.end(err);
            return res.redirect('/login');
        } 

        // having login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }

        // no issues
        req.logIn(user,function(err)
        {
            // having database error or any errors
            if(err)
            {
                console.error(err);
                res.end(err);
                return res.redirect('/login');
            }
            return res.redirect('/album-list');
        });
    })(req,res,next); // 3 objects
}

export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    // instantiate a new user object
   let newUser = new User
   ({
       username: req.body.username,
       EmailAddress: req.body.emailAddress,
       DisplayName: req.body.firstName + " " + req.body.lastName
   });

   User.register(newUser,req.body.passport,function(err)
   {
       if(err)
       {
           if(err.name == "UserExistsError")
           {
               console.error('ERROR: User Already Exists! :(');
               req.flash('registerMessage', 'Registration Error! :( Try again.');
           }
           else
           {
            console.error(err.name); // other errors
            req.flash('registerMessage', 'Server Error');
           }
           return res.redirect('/register');
       }

       // everything is fine - user has been registered

       // automatically login the user
       return passport.authenticate('local')(req, res, function()
       {
           return res.redirect('/album-list');
       })
   });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    req.logOut(function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err)
        }
        console.log("user logged out");
    });

    res.redirect('/login');
}


 // render here is for generate(draw) page; 
    // index(./View/index.ejs) here is the template;
    // title here is property
    // Home here is the object being passed to the index template