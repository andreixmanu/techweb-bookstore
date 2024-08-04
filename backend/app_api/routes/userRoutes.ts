import { Router } from 'express';
import { testUser, getUser, createUser, modifyUser, deleteUser, populateUsers, loginUser} from '../controllers/userController';

const router = Router();

router
    .route("/")
    .get(testUser)

router.post("/new", createUser)
router.post("/populate", populateUsers)
router.post("/moderator", createUser)
router.get("/login", loginUser)
router.get("/:id", getUser)
router.put("/:id", modifyUser)
router.delete("/:id", deleteUser)



export default router;