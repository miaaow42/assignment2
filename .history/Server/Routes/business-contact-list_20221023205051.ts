import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import {DisplayContactListPage} from '../Controller/business-contact-list';
import{DisplayAddContactPage} from '../Controller/add-contact';
import{ProcessAddContactPage} from '../Controller/add-contact';

// go to this page, next use AuthGuard to check if login or not. if login then continue to DisplayAlbumList,if not take to the login link
router.get('/business-contact-list',AuthGuard,DisplayContactListPage); // put middleware function in the middle

router.get('/add-contact',DisplayAddContactPage);
export default router;