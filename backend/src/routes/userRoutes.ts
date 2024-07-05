import express, { Router } from 'express';
import User from '../models/User';
import { testUser, getUser, createUser} from '../controllers/userController';

const router = Router();

router.get("/", testUser)
router.get("/:id", getUser)
router.get("/new", createUser)

export default router;