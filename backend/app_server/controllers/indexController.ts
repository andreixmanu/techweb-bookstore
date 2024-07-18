import express from 'express';

// add the list from test/book-test.json
var bookList = require('../../test/book-test.json');

const indexPage = (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'unibook-store', bookList: bookList });
}

const loginPage = (req: express.Request, res: express.Response) => {
    res.render('login', { title: 'unibook-store' });
}

const createPage = (req: express.Request, res: express.Response) => {
    res.render('create', { title: 'unibook-store' });
}

const profilePage = (req: express.Request, res: express.Response) => {
    res.render('profile', { title: 'unibook-store' });
}

const auctionsPage = (req: express.Request, res: express.Response) => {
    res.render('auctions', { title: 'unibook-store' });
}

const registerPage = (req: express.Request, res: express.Response) => {
    res.render('register', { title: 'unibook-store' });
}

const moderatorPage = (req: express.Request, res: express.Response) => {
    res.render('moderator', { title: 'unibook-store' });
}

module.exports = {  
    indexPage,
    loginPage,
    createPage,
    profilePage,
    auctionsPage,
    registerPage,
    moderatorPage
};