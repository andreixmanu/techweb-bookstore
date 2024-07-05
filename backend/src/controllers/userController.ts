import express from 'express';
import User from '../models/User';
import e from 'express';

export const getUser = async (req: express.Request, res: express.Response) => {
    res.send("User controller: getUser")
    res.status(200);
}