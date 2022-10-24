import express from 'express';
import Contacts from '../Models/contacts';
import { UserDisplayName  } from '../Util';
export function DisplayContactListPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    Contacts.find(function(err, contactCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Contact List', page: 'business-contact-list', contacts: contactCollection, displayName:  UserDisplayName(req)  });
    });
}

export function DisplayAddContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    Contacts.find(function(err, contactCollection)
    {
      let newContact = new Contacts({
        "Name": req.body.name,
        "Number": req.body.author,
        "Email": req.body.published
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
      
    });
}
