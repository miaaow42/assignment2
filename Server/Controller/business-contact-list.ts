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


