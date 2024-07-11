import { Router } from 'express';
import { testBook, getBook, createBook, modifyBook, deleteBook, patchBook } from '../controllers/bookController';

const router = Router();

// GET requests for book
router.get('/', testBook);
router.get('/:id', getBook);

// POST requests for book
router.post('/new', createBook);

// PUT requests for book
router.put('/:id', modifyBook);

//PATCH requests for book
router.patch('/:id', patchBook);

// DELETE requests for book
router.delete('/:id', deleteBook);

export default router;