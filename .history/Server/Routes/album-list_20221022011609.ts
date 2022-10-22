import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import {DisplayAlbumListPage} from '../Controller/album-list';

// go to this page, next use AuthGuard to check if login or not. if login then continue to DisplayAlbumList,if not take to the login link
router.get('/album-list',AuthGuard,DisplayAlbumListPage); // put middleware function in the middle

export default router;