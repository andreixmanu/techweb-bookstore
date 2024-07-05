import express from 'express';
import Auction from '../models/Auction';

export const getAuction = async (req: express.Request, res: express.Response) => {
    res.send("Auction controller: getAuction")
    res.status(200);
}