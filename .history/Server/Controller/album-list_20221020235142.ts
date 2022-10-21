import express from 'express';

import Album from '../Models/album';

export function DisplayAlbumList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Album.find(function(err,albumCollection)
    {
       if(err)
       {
           console.error(err);
           res.end(err);
       } 
       res.render('index',{title:'Album List', page: 'album-list', album: albumCollection,displayName:''});
    });
}