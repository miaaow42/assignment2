import express from 'express';
import Contacts from '../Models/contacts';
import { UserDisplayName  } from '../Util';


export function DisplayAddContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let newContact = new Contacts({
    "Name": req.body.Name,
    "Number":req.body.Number,
    "Email":req.body.Email
});
Contacts.create(newContact,(err,Contacts)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
    res.redirect('/business-contact-list');
    }
});
}