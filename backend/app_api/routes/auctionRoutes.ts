import { Router } from 'express';
import { testAuction, getAuction, createAuction, deleteAuction, modifyAuction, populateAuction } from '../controllers/auctionController';

const router = Router();

router.get("/", testAuction)
router.post("/new", createAuction)
router.post("/populate", populateAuction)
router.get("/:id", getAuction)
router.delete("/:id", deleteAuction)
router.put("/:id", modifyAuction)

export default router;