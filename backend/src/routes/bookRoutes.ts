import { Router } from 'express';
import { testBook, getBook, createBook } from '../controllers/bookController';

const router = Router();

// GET handler for /book
router.get('/', testBook);
router.post('/new', createBook);
router.get('/:id', getBook);


export default router;