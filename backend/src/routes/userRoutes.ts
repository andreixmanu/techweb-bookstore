import express, { Router } from 'express';
import User from '../models/User';
import { getUser } from '../controllers/userController';

const router = Router();

router.get("/", getUser)

export default router;