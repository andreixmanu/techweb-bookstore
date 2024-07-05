import express from 'express';
import { Router } from 'express';
import Auction from '../models/Auction';
import { getAuction } from '../controllers/auctionController';

const router = Router();

router.get("/", getAuction)

export default router;