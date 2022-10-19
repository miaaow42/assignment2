import express from 'express';
const router = express.Router();

import {DisplayAlbumList} from '../Controller/album-list';
router.get('/album-list',DisplayAlbumList);

export default router;