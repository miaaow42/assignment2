import express from 'express';
import Contacts from '../Models/contacts';
import { UserDisplayName  } from '../Util';
export function ProcessDeleteContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let id = req.params.id;
            Contacts.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('business-contact-list');
                }

            });
}