import express from "express";
import Book from "../models/Book";
import { promises as fs } from "fs";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";

export const testBook = async (req: express.Request, res: express.Response) => {
    res.send("Book controller: testBook");
    res.status(200);
};

export const getBook = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    try {
        const user = await Book.findById(id);
        res.status(200).json(user);
        console.log("Book found");
    } catch (err) {
        console.error("Error getting book", err);
    }
};

export const createBook = async (
    req: express.Request,
    res: express.Response,
) => {
    const { title, author, price_sold, reserved_price, current_price, owner, cover_image } =
        req.body;

    try {
        const newBook = new Book({
            title,
            author,
            price_sold,
            reserved_price,
            current_price,
            owner,
            cover_image
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
        console.log("New book created");
    } catch (err) {
        console.error("Error creating new book", err);
        res.status(500).send("Error creating new book");
    }
};

export const deleteBook = async (
    req: express.Request,
    res: express.Response,
) => {
    const id = req.params.id;
    try {
        const user = await Book.findByIdAndDelete(id);
        res.status(200).json(user);
        console.log("Book deleted");
    } catch (err) {
        console.error("Error deleting book", err);
    }
};

export const modifyBook = async (
    req: express.Request,
    res: express.Response,
) => {
    const id = req.params.id;
    const { username, password, role, email, created_at } = req.body;
    try {
        const user = await Book.findByIdAndUpdate(id, {
            username,
            password,
            role,
            email,
            created_at,
        });
        res.status(200).json(user);
        console.log("Book updated");
    } catch (err) {
        console.error("Error updating book", err);
    }
};

export const getAllBooks = async (
    req: express.Request,
    res: express.Response,
) => {
    // send all the books in the database
    try {
        const books = await Book.find();
        res.status(200).json(books);
        console.log("All books found");
    } catch (err) {
        console.error("Error getting all books", err);
    }
};

export const populateBooks = async (req: express.Request, res: express.Response) => {

    // get the json of books from ../test/book-test.json
    const books = require('../../test/book-test.json');

    // send them to the database
    try {
        await Book.insertMany(books);
        res.status(200).send("Books populated");
        console.log("Books populated");
    } catch (err) {
        console.error("Error populating books", err);
    }
}