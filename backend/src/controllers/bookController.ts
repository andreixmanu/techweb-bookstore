import express from 'express';
import Book from '../models/Book';

export const testBook = async (req: express.Request, res: express.Response) => {
    res.send("Book controller: testBook")
    res.status(200);
}

export const getBook = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    res.send(`Book controller: getBook ${id}`)
    res.status(200);
}

export const createBook = async (req: express.Request, res: express.Response) => {
    res.send("Book controller: createBook")
    res.status(200);
}

