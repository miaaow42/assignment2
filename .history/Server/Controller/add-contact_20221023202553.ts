import express from 'express';
import Contacts from '../Models/contacts';
import { UserDisplayName  } from '../Util';


export function DisplayAddContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    Contacts.find(function(err, addContactCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Add Contact', page: 'add-contact', contacts: addContactCollection, displayName:  UserDisplayName(req)  });
    });
}

export function ProcessAddContactPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    let newContact = new Contacts
    ({
        Name: req.body.Name,
        Number: req.body.Number,
        Email: req.body.Email
    });
    Contacts.create(newContact,(err,Contacts)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            console.error(err); // other error
            req.flash('addContactMessage', 'Server Error');
        }
        return res.redirect('/business-contact-list');
    });
}