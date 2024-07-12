import { Router } from 'express';
import { testUser, getUser, createUser, modifyUser, deleteUser} from '../controllers/userController';

const router = Router();

router.get("/", testUser)
router.post("/new", createUser)
router.get("/:id", getUser)
router.put("/:id", modifyUser)
router.delete("/:id", deleteUser)

export default router;          