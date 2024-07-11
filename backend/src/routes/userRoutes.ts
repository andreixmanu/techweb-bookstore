import express, { Router } from 'express';
import { testUser, getUser, createUser, modifyUser, deleteUser, patchUser} from '../controllers/userController';

const router = Router();

// GET routes for USER
router.get("/", testUser)
router.get("/:id", getUser)

// POST routes for USER
router.post("/new", createUser)

// PUT routes for USER
router.put("/:id", modifyUser)

// PATCH routes for USER
router.patch("/:id", patchUser)

// DELETE routes for USER
router.delete("/:id", deleteUser)

export default router;          