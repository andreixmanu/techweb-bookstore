import express, { Router } from 'express';
const router = Router();
import { indexPage } from '../controllers/indexController';

router.get('/', indexPage);

export default router;          