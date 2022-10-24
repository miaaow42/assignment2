import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import{DisplayAddContactPage,ProcessAddContactPage} from '../Controller/add-contact';

// go to this page, next use AuthGuard to check if login or not. if login then continue to DisplayAlbumList,if not take to the login link
router.get('/add-contact',AuthGuard,DisplayAddContactPage);
router.post('/business-contact-list',ProcessAddContactPage);
export default router;