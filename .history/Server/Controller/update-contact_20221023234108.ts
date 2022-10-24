import express from 'express';
import Contacts from '../Models/contacts';
import { UserDisplayName  } from '../Util';


export function DisplayUpdateContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;
    Contacts.findById(id,(err: { message: any; },contactToUpdate: any)=>
    {
    //   Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Update Contact', page: 'update-contact', contacts: contactToUpdate, displayName:  UserDisplayName(req)  })
    });
}


export function ProcessUpdateContactPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    let id = req.params.id;
    console.log(id);
    let updateContact = new Contacts
    ({
        _id: id,
        Name: req.body.Name,
        Number: req.body.Number,
        Email: req.body.Email
    });
    Contacts.updateOne({_id:id},updateContact,{},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('business-contact-list');
        }
        console.log("suuuuuuu");
    });
}