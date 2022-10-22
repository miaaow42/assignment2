// import express from 'express';

// // a global function, can use in anywhere
// // convenience function to return the DisplayName of the User
// export function UserDisplayName(req: express.Request): string
// {
//     if(req.user)
//     {
//         let user = req.user as UserDocument
//         return user.DisplayName.toString();
//     }
//     return '';
// }

// // helper middleware function (means can put middleware function between another requests or function call)for guarding secure locations
// export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction):void // return nothing
// {
//     if(!req.isAuthenticated()) // if not authenticated
//     {
//         return res.redirect('/login'); // go back to login page
//     }
//     next(); // else execute next function
// }

import express from 'express';

// convenience function to return the DisplayName of the User
export function UserDisplayName(req: express.Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.DisplayName.toString();
    }
    return '';
}

// helper middleware function for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}