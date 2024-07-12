import { Router } from 'express';
import { testBook, getBook, createBook, modifyBook, deleteBook, getAllBooks } from '../controllers/bookController';

const router = Router();

// GET handler for /book
router.get('/', testBook);
router.post('/new', createBook);
router.get('/all', getAllBooks)
router.get('/:id', getBook);
router.put('/:id', modifyBook);
router.delete('/:id', deleteBook);


export default router;