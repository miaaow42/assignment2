import express from 'express';

// a global function, can use in anywhere
// convenience function to return the DisplayName of the User
export function UserDisplayName(req: express.Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString();
    }
    return '';
}

// helper middleware function (means can put middleware function between another function call)for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction)
{
    if(!req.isAuthenticated()) // if not authenticated
    {
        return res.redirect('/login'); // go back to login page
    }
    next(); // else execute next function
}