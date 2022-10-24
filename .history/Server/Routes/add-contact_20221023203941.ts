import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import {ProcessAddContactPage} from '../Controller/add-contact';

// go to this page, next use AuthGuard to check if login or not. if login then continue to DisplayAlbumList,if not take to the login link

router.post('/add-contact',ProcessAddContactPage);
export default router;