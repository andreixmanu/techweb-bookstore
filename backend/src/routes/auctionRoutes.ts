import express from 'express';
import { Router } from 'express';
import Auction from '../models/Auction';
import { testAuction, getAuction, createAuction } from '../controllers/auctionController';

const router = Router();

router.get("/", testAuction)
router.get("/:id", getAuction)
router.get("/new", createAuction)

export default router;