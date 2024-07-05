import { Router } from 'express';
import { testBook, getBook, createBook } from '../controllers/bookController';

const router = Router();

// GET handler for /book
router.get('/', testBook);
router.get('/:id', getBook);
router.get('/new', createBook);

export default router;