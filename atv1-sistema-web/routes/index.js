import express from 'express';
import { getHome, getFilmes, getSeries, getContato } from '../controllers/catalogoController.js';

const router = express.Router();

router.get('/', getHome);
router.get('/filmes', getFilmes);
router.get('/series', getSeries);
router.get('/contato', getContato);

export default router;