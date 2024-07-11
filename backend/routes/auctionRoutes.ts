import express from 'express';
import { Router } from 'express';
import Auction from '../models/Auction';
import { testAuction, getAuction, createAuction, deleteAuction, modifyAuction } from '../controllers/auctionController';

const router = Router();

router.get("/", testAuction)
router.post("/new", createAuction)
router.get("/:id", getAuction)
router.delete("/:id", deleteAuction)
router.put("/:id", modifyAuction)

export default router;