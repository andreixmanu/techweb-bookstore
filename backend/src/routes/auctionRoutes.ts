import express from 'express';
import { Router } from 'express';
import Auction from '../models/Auction';
import { testAuction, getAuction, createAuction, deleteAuction, modifyAuction, patchAuction } from '../controllers/auctionController';

const router = Router();

// GET routes for AUCTION
router.get("/", testAuction)
router.get("/:id", getAuction)

// POST routes for AUCTION
router.post("/new", createAuction)

// DELETE routes for AUCTION
router.delete("/:id", deleteAuction)

// PATCH routes for AUCTION
router.patch("/:id", patchAuction)

// PUT routes for AUCTION
router.put("/:id", modifyAuction)

export default router;