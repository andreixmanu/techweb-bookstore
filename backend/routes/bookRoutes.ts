import { Router } from 'express';
import { testBook, getBook, createBook, modifyBook, deleteBook, getAllBooks } from '../controllers/bookController';

const router = Router();

// GET handler for /book
router.get('/', testBook);
router.post('/new', createBook);
router.get('/:id', getBook);
router.put('/:id', modifyBook);
router.delete('/:id', deleteBook);
router.get('/all', getAllBooks)

export default router;