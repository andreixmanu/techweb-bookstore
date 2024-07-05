import express from 'express';
import User from '../models/User';

export const testUser = async (req: express.Request, res: express.Response) => {
    res.send("User controller: testUser")
    res.status(200);
}

export const getUser = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    res.send(`User controller: getUser ${id}`)
    res.status(200);
}

export const createUser = async (req: express.Request, res: express.Response) => {
    res.send("User controller: createUser")
    res.status(200);
}