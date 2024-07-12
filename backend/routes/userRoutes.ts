import { Router } from 'express';
import { testUser, getUser, createUser, modifyUser, deleteUser, populateUsers} from '../controllers/userController';

const router = Router();

router.get("/", testUser)
router.post("/new", createUser)
router.post("/populate", populateUsers)
router.get("/:id", getUser)
router.put("/:id", modifyUser)
router.delete("/:id", deleteUser)

export default router;          