import { Router } from 'express';
import { getBook } from '../controllers/bookController';
const router = Router();

// GET handler for /book
router.get('/', getBook);

export default router;