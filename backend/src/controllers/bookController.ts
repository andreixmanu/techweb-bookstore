import express from 'express';
import Book from '../models/Book';

export const getBook = async (req: express.Request, res: express.Response) => {
    res.send("Book controller: getBook")
    res.status(200);
}

