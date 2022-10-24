import express from 'express';
import Contacts from '../Models/contacts';
import { UserDisplayName  } from '../Util';


export function DisplayAddContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    Contacts.find(function(err, contactCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Add Contact', page: 'add-contact', contacts: contactCollection, displayName:  UserDisplayName(req)  });
    });
}