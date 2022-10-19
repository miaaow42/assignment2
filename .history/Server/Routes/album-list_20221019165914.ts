import express from 'express';
const router = express.Router();

router.get('/album-list',DisplayAlbumList);

export default router;