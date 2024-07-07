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
    console.log("Creating new book");

    const { title,
            author,
            price_sold,
            reserved_price,
            current_price, 
            owner } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            price_sold,
            reserved_price,
            current_price,
            owner
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        console.error("Error creating new book", err);
        res.status(500).send("Error creating new book");
    }
}
