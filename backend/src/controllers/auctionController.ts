import express from 'express';
import Auction from '../models/Auction';

export const testAuction = async (req: express.Request, res: express.Response) => {
    res.send("Auction controller: testAuction")
    res.status(200);
}

export const createAuction = async (req: express.Request, res: express.Response) => {
    console.log("Creating new auction");

    const {
        book,
        seller,
        price_sold,
        current_price,
        reserved_price, // used as initial price for the auction
        created_at,
        updated_at
    } = req.body;

    try {
        const newAuction = new Auction({
            book,
            seller,
            price_sold,
            current_price,
            reserved_price,
            created_at,
            updated_at
        });

        const savedAuction = await newAuction.save();
        res.status(201).json(savedAuction);
    } catch (err) {
        console.error("Error creating new auction", err);
        res.status(500).send("Error creating new auction");
    }

}

export const getAuction = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    res.send(`Auction controller: getAuction ${id}`)
    res.status(200);
}   