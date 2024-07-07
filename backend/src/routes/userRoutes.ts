import express, { Router } from 'express';
import User from '../models/User';
import { testUser, getUser, createUser} from '../controllers/userController';

const router = Router();

router.get("/", testUser)
router.post("/new", createUser)
router.get("/:id", getUser)

export default router;