import express from 'express';

export const indexPage = (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express'});
}