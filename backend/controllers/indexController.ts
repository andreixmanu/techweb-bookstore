import express from 'express';

// add the list from test/book-test.json
var bookList = require('../test/book-test.json');

export const indexPage = (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express', bookList: bookList });
}