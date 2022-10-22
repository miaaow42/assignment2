import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import {DisplayAlbumList} from '../Controller/album-list';

// go to this page, next use AuthGuard to check if login or not. if login then continue to DisplayAlbumList,if not take to the login page
router.get('/album-list',AuthGuard,DisplayAlbumList); 

export default router;