import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import{DisplayAddContactPage} from '../Controller/add-contact';

import {processAddContactPage} from '../Controller/add-contact';

// go to this page, next use AuthGuard to check if login or not. if login then continue to DisplayAlbumList,if not take to the login link

router.get('/add-contact',AuthGuard,DisplayAddContactPage);
router.get('/add-contact',processAddContactPage);
export default router;