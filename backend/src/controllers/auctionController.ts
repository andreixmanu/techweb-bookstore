import express from 'express';
import Auction from '../models/Auction';

export const testAuction = async (req: express.Request, res: express.Response) => {
    res.send("Auction controller: testAuction")
    res.status(200);
}

export const createAuction = async (req: express.Request, res: express.Response) => {
    res.send("Auction controller: createAuction")
    res.status(200);
}

export const getAuction = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    res.send(`Auction controller: getAuction ${id}`)
    res.status(200);
}